// File: index.js - Main server file
    const updatedMusic = await Music.findById(req.params.id)
      .populate('artist', 'name')
      .exec();
    
    res.json({ music: updatedMusic });
  } catch (err) {
    console.error('Error liking/unliking music:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recommended music for user
router.get('/recommendations/for-me', isAuthenticated, async (req, res) => {
  try {
    // Get music based on user's genres
    const recommendations = await Music.find({
      genres: { $in: req.user.genres },
      artist: { $ne: req.user._id } // Exclude user's own music
    })
    .populate('artist', 'name profileImage')
    .limit(10)
    .exec();
    
    res.json({ recommendations });
  } catch (err) {
    console.error('Error fetching recommendations:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// File: routes/subscriptions.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const { isAuthenticated } = require('../middleware/auth');

// Create subscription checkout session
router.post('/create-checkout-session', isAuthenticated, async (req, res) => {
  try {
    const { plan } = req.body;
    
    if (!plan || (plan !== 'raver' && plan !== 'dj')) {
      return res.status(400).json({ message: 'Invalid subscription plan' });
    }
    
    // Set price based on plan
    const priceId = plan === 'dj'
      ? process.env.STRIPE_DJ_PRICE_ID
      : process.env.STRIPE_RAVER_PRICE_ID;
    
    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.CLIENT_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/subscription/cancel`,
      customer_email: req.user.email,
      client_reference_id: req.user.id,
      metadata: {
        userId: req.user.id,
        plan
      }
    });
    
    res.json({ url: session.url });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ message: 'Error creating checkout session' });
  }
});

// Webhook to handle subscription events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  // Handle subscription events
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      
      if (session.mode === 'subscription' && session.payment_status === 'paid') {
        const userId = session.metadata.userId;
        const subscriptionId = session.subscription;
        
        // Update user with subscription info
        await User.findByIdAndUpdate(userId, {
          isPremium: true,
          subscriptionId,
          subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
        });
      }
      break;
      
    case 'invoice.paid':
      // Extend subscription when invoice is paid
      const invoice = event.data.object;
      const subscriptionId = invoice.subscription;
      
      // Find user with this subscription
      const user = await User.findOne({ subscriptionId });
      
      if (user) {
        // Extend subscription by 30 days
        const newEndDate = new Date(
          user.subscriptionEnd > new Date()
            ? user.subscriptionEnd
            : Date.now()
        );
        newEndDate.setDate(newEndDate.getDate() + 30);
        
        await User.findByIdAndUpdate(user._id, {
          isPremium: true,
          subscriptionEnd: newEndDate
        });
      }
      break;
      
    case 'customer.subscription.deleted':
      // End subscription
      const deletedSubscription = event.data.object;
      
      await User.findOneAndUpdate(
        { subscriptionId: deletedSubscription.id },
        {
          isPremium: false,
          subscriptionId: null
        }
      );
      break;
  }
  
  res.json({ received: true });
});

// Get current subscription status
router.get('/status', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    const subscription = {
      isPremium: user.isPremium,
      plan: user.userType,
      endDate: user.subscriptionEnd
    };
    
    res.json({ subscription });
  } catch (err) {
    console.error('Error fetching subscription status:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// File: middleware/auth.js
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Not authenticated' });
};

const isDJ = (req, res, next) => {
  if (req.user && req.user.userType === 'dj') {
    return next();
  }
  res.status(403).json({ message: 'Access denied. Only DJs can perform this action' });
};

const isRaver = (req, res, next) => {
  if (req.user && req.user.userType === 'raver') {
    return next();
  }
  res.status(403).json({ message: 'Access denied. Only ravers can perform this action' });
};

const isPremium = (req, res, next) => {
  if (req.user && req.user.isPremium) {
    return next();
  }
  res.status(403).json({ 
    message: 'This feature requires a premium subscription',
    requiresUpgrade: true
  });
};

module.exports = {
  isAuthenticated,
  isDJ,
  isRaver,
  isPremium
};

// File: .env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/together-we-rave
SESSION_SECRET=your-secret-key-change-this-in-production
CLIENT_URL=http://localhost:3000
TICKETMASTER_API_KEY=your-ticketmaster-api-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
STRIPE_RAVER_PRICE_ID=price_raver_subscription
STRIPE_DJ_PRICE_ID=price_dj_subscription

// File: package.json
{
  "name": "together-we-rave",
  "version": "1.0.0",
  "description": "EDM Festival Community Platform",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "client": "cd client && npm start",
    "install-client": "cd client && npm install",
    "build-client": "cd client && npm run build",
    "heroku-postbuild": "npm run install-client && npm run build-client"
  },
  "keywords": [
    "edm",
    "festival",
    "music",
    "community"
  ],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "axios": "^1.3.4",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^7.0.1",
    "multer": "^1.4.5-lts.1",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "stripe": "^12.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.21"
  },
  "engines": {
    "node": "16.x"
  }
}

// File: client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Page Components
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RaverOnboarding from './pages/RaverOnboarding';
import DJOnboarding from './pages/DJOnboarding';
import RaverDashboard from './pages/RaverDashboard';
import DJDashboard from './pages/DJDashboard';
import FestivalsPage from './pages/FestivalsPage';
import FestivalDetails from './pages/FestivalDetails';
import MessagesPage from './pages/MessagesPage';
import ChatPage from './pages/ChatPage';
import MatchesPage from './pages/MatchesPage';
import MusicUploadPage from './pages/MusicUploadPage';
import MusicPlayerPage from './pages/MusicPlayerPage';
import SubscriptionPage from './pages/SubscriptionPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import DJProfile from './pages/DJProfile';

// Context
import { UserProvider } from './context/UserContext';

// Set up axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in on app start
    const checkAuth = async () => {
      try {
        await axios.get('/auth/current-user');
      } catch (err) {
        console.log('User not authenticated');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Onboarding Routes */}
          <Route path="/raver-onboarding" element={<RaverOnboarding />} />
          <Route path="/dj-onboarding" element={<DJOnboarding />} />
          
          {/* Dashboard Routes */}
          <Route path="/raver-dashboard" element={<RequireAuth userType="raver"><RaverDashboard /></RequireAuth>} />
          <Route path="/dj-dashboard" element={<RequireAuth userType="dj"><DJDashboard /></RequireAuth>} />
          
          {/* Feature Routes */}
          <Route path="/festivals" element={<RequireAuth><FestivalsPage /></RequireAuth>} />
          <Route path="/festivals/:id" element={<RequireAuth><FestivalDetails /></RequireAuth>} />
          <Route path="/messages" element={<RequireAuth><MessagesPage /></RequireAuth>} />
          <Route path="/messages/:userId" element={<RequireAuth><ChatPage /></RequireAuth>} />
          <Route path="/matches" element={<RequireAuth userType="raver"><MatchesPage /></RequireAuth>} />
          <Route path="/music-upload" element={<RequireAuth userType="dj"><MusicUploadPage /></RequireAuth>} />
          <Route path="/music/:id" element={<RequireAuth><MusicPlayerPage /></RequireAuth>} />
          <Route path="/subscription" element={<RequireAuth><SubscriptionPage /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/dj/:id" element={<RequireAuth><DJProfile /></RequireAuth>} />
          <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
          
          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

// Auth wrapper component
const RequireAuth = ({ children, userType }) => {
  const { user, loading } = React.useContext(UserContext);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (userType && user.userType !== userType) {
    return <Navigate to={user.userType === 'raver' ? '/raver-dashboard' : '/dj-dashboard'} />;
  }
  
  return children;
};

export default App;

// File: client/src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/auth/current-user');
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);
  
  const login = async (email, password) => {
    const res = await axios.post('/auth/login', { email, password });
    setUser(res.data.user);
    return res.data.user;
  };
  
  const register = async (userData) => {
    const res = await axios.post('/auth/register', userData);
    setUser(res.data.user);
    return res.data.user;
  };
  
  const logout = async () => {
    await axios.post('/auth/logout');
    setUser(null);
  };
  
  const updateProfile = async (profileData) => {
    const res = await axios.put('/auth/update-profile', profileData);
    setUser(res.data.user);
    return res.data.user;
  };
  
  const upgradeSubscription = async (plan) => {
    const res = await axios.post('/subscriptions/create-checkout-session', { plan });
    return res.data.url;
  };
  
  return (
    <UserContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      updateProfile,
      upgradeSubscription,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

// File: client/public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Together We Rave - Connect with DJs and fellow ravers for the ultimate festival experience"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Together We Rave</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

// File: client/package.json
{
  "name": "together-we-rave-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@headlessui/react": "^1.7.13",
    "@heroicons/react": "^2.0.16",
    "@stripe/stripe-js": "^1.48.0",
    "@tailwindcss/forms": "^0.5.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "axios": "^1.3.4",
    "date-fns": "^2.29.3",
    "react": "^18.2.0",
    "react-audio-player": "^0.17.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^3.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.7"
  }
}

// File: client/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// File: README.md
# Together We Rave

An EDM Festival Community Platform that connects ravers and DJs, providing festival information, music discovery, and social features.

## Features

- User authentication (Ravers and DJs)
- Festival discovery with Ticketmaster integration
- Music upload and sharing for DJs
- Messaging system between users
- Matching system for ravers
- Premium subscription plans

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Tailwind CSS
- **Authentication**: Passport.js
- **File Storage**: Multer
- **Payment Processing**: Stripe

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/together-we-rave.git
cd together-we-rave
```

2. Install server dependencies:
```
npm install
```

3. Install client dependencies:
```
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLIENT_URL=http://localhost:3000
TICKETMASTER_API_KEY=your_ticketmaster_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_RAVER_PRICE_ID=price_raver_subscription
STRIPE_DJ_PRICE_ID=price_dj_subscription
```

5. Create a `.env` file in the client directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode

1. Start the server:
```
npm run dev
```

2. In a separate terminal, start the client:
```
cd client
npm start
```

3. Access the application at `http://localhost:3000`

### Production Mode

1. Build the client:
```
cd client
npm run build
cd ..
```

2. Start the server:
```
npm start
```

## Deployment

This application can be deployed to platforms like Heroku, Vercel, or any other hosting service that supports Node.js applications.

## License

MIT

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

// Models import
const User = require('./models/User');
const Festival = require('./models/Festival');
const Message = require('./models/Message');
const Music = require('./models/Music');

// Route imports
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const festivalRoutes = require('./routes/festivals');
const messageRoutes = require('./routes/messages');
const musicRoutes = require('./routes/music');
const subscriptionRoutes = require('./routes/subscriptions');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'together-we-rave-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) return done(null, false, { message: 'User not found' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false, { message: 'Incorrect password' });
    
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/festivals', festivalRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/together-we-rave', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));

// File: models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['raver', 'dj'],
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  subscriptionEnd: {
    type: Date
  },
  genres: {
    type: [String]
  },
  bio: {
    type: String
  },
  profileImage: {
    type: String
  },
  bucketList: {
    type: [String]
  },
  socialLinks: {
    instagram: String,
    soundcloud: String,
    spotify: String
  },
  matches: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);

// File: models/Festival.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FestivalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  ticketmasterId: {
    type: String
  },
  ticketUrl: {
    type: String
  },
  genres: {
    type: [String]
  },
  lineup: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Festival', FestivalSchema);

// File: models/Message.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', MessageSchema);

// File: models/Music.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  coverImage: {
    type: String
  },
  description: {
    type: String
  },
  genres: {
    type: [String]
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  plays: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Music', MusicSchema);

// File: routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      userType
    });
    
    await newUser.save();
    
    // Auto login after registration
    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error during login after registration' });
      }
      
      // Remove password from response
      const userResponse = { ...newUser._doc };
      delete userResponse.password;
      
      return res.status(201).json({ user: userResponse });
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login user
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Server error during login' });
    }
    
    if (!user) {
      return res.status(401).json({ message: info.message || 'Authentication failed' });
    }
    
    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: 'Error during login process' });
      }
      
      // Remove password from response
      const userResponse = { ...user._doc };
      delete userResponse.password;
      
      return res.json({ user: userResponse });
    });
  })(req, res, next);
});

// Logout user
router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error during logout process' });
    }
    res.json({ message: 'Logout successful' });
  });
});

// Get current user
router.get('/current-user', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  
  // Remove password from response
  const userResponse = { ...req.user._doc };
  delete userResponse.password;
  
  res.json({ user: userResponse });
});

// Update user profile
router.put('/update-profile', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  
  try {
    const { name, genres, bio, bucketList, socialLinks } = req.body;
    const updatedFields = {};
    
    if (name) updatedFields.name = name;
    if (genres) updatedFields.genres = genres;
    if (bio) updatedFields.bio = bio;
    if (bucketList) updatedFields.bucketList = bucketList;
    if (socialLinks) updatedFields.socialLinks = socialLinks;
    
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updatedFields },
      { new: true }
    );
    
    // Remove password from response
    const userResponse = { ...updatedUser._doc };
    delete userResponse.password;
    
    res.json({ user: userResponse });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Server error during profile update' });
  }
});

module.exports = router;

// File: routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Music = require('../models/Music');
const { isAuthenticated } = require('../middleware/auth');

// Get all DJs
router.get('/djs', async (req, res) => {
  try {
    const djs = await User.find({ userType: 'dj' })
      .select('-password')
      .sort({ createdAt: -1 });
    
    res.json({ djs });
  } catch (err) {
    console.error('Error fetching DJs:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get DJ profile with music
router.get('/dj/:id', async (req, res) => {
  try {
    const dj = await User.findOne({ _id: req.params.id, userType: 'dj' })
      .select('-password');
    
    if (!dj) {
      return res.status(404).json({ message: 'DJ not found' });
    }
    
    // Get DJ's music
    const music = await Music.find({ artist: dj._id })
      .sort({ createdAt: -1 });
    
    res.json({ dj, music });
  } catch (err) {
    console.error('Error fetching DJ profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get potential matches for raver
router.get('/matches', isAuthenticated, async (req, res) => {
  if (req.user.userType !== 'raver') {
    return res.status(400).json({ message: 'Only ravers can get matches' });
  }
  
  try {
    // Get users with similar genres who aren't already matched
    const potentialMatches = await User.find({
      _id: { $ne: req.user._id },
      genres: { $in: req.user.genres },
      _id: { $nin: req.user.matches }
    })
    .select('-password')
    .limit(20);
    
    res.json({ matches: potentialMatches });
  } catch (err) {
    console.error('Error fetching matches:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a match
router.post('/match/:id', isAuthenticated, async (req, res) => {
  if (req.user.userType !== 'raver') {
    return res.status(400).json({ message: 'Only ravers can create matches' });
  }
  
  try {
    // Check for premium status if user has more than 10 matches
    if (req.user.matches.length >= 10 && !req.user.isPremium) {
      return res.status(403).json({ 
        message: 'Premium account required for more than 10 matches',
        requiresUpgrade: true
      });
    }
    
    // Add match to user
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { matches: req.params.id } },
      { new: true }
    );
    
    res.json({ success: true, user: updatedUser });
  } catch (err) {
    console.error('Error adding match:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's matches
router.get('/my-matches', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('matches', '-password')
      .exec();
    
    res.json({ matches: user.matches });
  } catch (err) {
    console.error('Error fetching user matches:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// File: routes/festivals.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Festival = require('../models/Festival');
const { isAuthenticated } = require('../middleware/auth');

// Get Ticketmaster festivals
router.get('/ticketmaster', async (req, res) => {
  try {
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json`,
      {
        params: {
          classificationName: 'music',
          genreId: 'KnvZfZ7vAvF', // EDM genre ID
          size: 20,
          apikey: process.env.TICKETMASTER_API_KEY
        }
      }
    );
    
    // Format the response
    const events = response.data._embedded?.events || [];
    const formattedEvents = events.map(event => ({
      id: event.id,
      name: event.name,
      date: event.dates.start.dateTime,
      location: event._embedded?.venues[0]?.name,
      city: event._embedded?.venues[0]?.city?.name,
      state: event._embedded?.venues[0]?.state?.name,
      country: event._embedded?.venues[0]?.country?.name,
      imageUrl: event.images[0]?.url,
      ticketUrl: event.url
    }));
    
    res.json({ events: formattedEvents });
  } catch (err) {
    console.error('Error fetching Ticketmaster events:', err);
    res.status(500).json({ message: 'Error fetching festival data' });
  }
});

// Get all festivals
router.get('/', async (req, res) => {
  try {
    const festivals = await Festival.find()
      .populate('lineup', 'name profileImage')
      .sort({ date: 1 })
      .exec();
    
    res.json({ festivals });
  } catch (err) {
    console.error('Error fetching festivals:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get festival by ID
router.get('/:id', async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id)
      .populate('lineup', 'name profileImage')
      .populate('attendees', 'name profileImage')
      .exec();
    
    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }
    
    res.json({ festival });
  } catch (err) {
    console.error('Error fetching festival:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add festival to user's bucket list
router.post('/bucket-list/:id', isAuthenticated, async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id);
    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }
    
    // Add user to festival attendees
    await Festival.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { attendees: req.user._id } }
    );
    
    res.json({ success: true });
  } catch (err) {
    console.error('Error adding to bucket list:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// File: routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/User');
const { isAuthenticated } = require('../middleware/auth');

// Get conversations for current user
router.get('/conversations', isAuthenticated, async (req, res) => {
  try {
    // Find all messages where user is either sender or recipient
    const messages = await Message.find({
      $or: [
        { sender: req.user._id },
        { recipient: req.user._id }
      ]
    })
    .sort({ createdAt: -1 })
    .populate('sender', 'name profileImage')
    .populate('recipient', 'name profileImage')
    .exec();
    
    // Extract unique conversations
    const conversationsMap = new Map();
    
    messages.forEach(message => {
      const otherUserId = message.sender._id.toString() === req.user._id.toString() 
        ? message.recipient._id.toString() 
        : message.sender._id.toString();
      
      if (!conversationsMap.has(otherUserId)) {
        const otherUser = message.sender._id.toString() === req.user._id.toString() 
          ? message.recipient 
          : message.sender;
          
        conversationsMap.set(otherUserId, {
          user: otherUser,
          lastMessage: message.content,
          lastMessageDate: message.createdAt,
          unread: message.recipient._id.toString() === req.user._id.toString() && !message.read ? 1 : 0
        });
      } else if (message.recipient._id.toString() === req.user._id.toString() && !message.read) {
        // Increment unread count for existing conversation
        const convo = conversationsMap.get(otherUserId);
        convo.unread += 1;
        conversationsMap.set(otherUserId, convo);
      }
    });
    
    // Convert map to array
    const conversations = Array.from(conversationsMap.values())
      .sort((a, b) => b.lastMessageDate - a.lastMessageDate);
    
    res.json({ conversations });
  } catch (err) {
    console.error('Error fetching conversations:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get messages between current user and another user
router.get('/:userId', isAuthenticated, async (req, res) => {
  try {
    // Check for premium status if raver
    if (req.user.userType === 'raver' && !req.user.isPremium) {
      const messageCount = await Message.countDocuments({
        $or: [
          { sender: req.user._id },
          { recipient: req.user._id }
        ]
      });
      
      if (messageCount > 20) {
        return res.status(403).json({ 
          message: 'Premium account required for unlimited messaging',
          requiresUpgrade: true
        });
      }
    }
    
    // Get messages between two users
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: req.params.userId },
        { sender: req.params.userId, recipient: req.user._id }
      ]
    })
    .sort({ createdAt: 1 })
    .populate('sender', 'name profileImage')
    .populate('recipient', 'name profileImage')
    .exec();
    
    // Mark messages as read
    await Message.updateMany(
      { sender: req.params.userId, recipient: req.user._id, read: false },
      { $set: { read: true } }
    );
    
    // Get user info
    const otherUser = await User.findById(req.params.userId)
      .select('name profileImage userType')
      .exec();
    
    if (!otherUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ messages, user: otherUser });
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Send a message
router.post('/:userId', isAuthenticated, async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ message: 'Message content is required' });
    }
    
    // Check recipient exists
    const recipient = await User.findById(req.params.userId);
    if (!recipient) {
      return res.status(404).json({ message: 'Recipient not found' });
    }
    
    // Check for premium status if raver
    if (req.user.userType === 'raver' && !req.user.isPremium) {
      const messageCount = await Message.countDocuments({
        sender: req.user._id
      });
      
      if (messageCount >= 20) {
        return res.status(403).json({ 
          message: 'Premium account required for unlimited messaging',
          requiresUpgrade: true
        });
      }
    }
    
    // Create and save message
    const newMessage = new Message({
      sender: req.user._id,
      recipient: req.params.userId,
      content
    });
    
    await newMessage.save();
    
    // Populate sender and recipient info
    const populatedMessage = await Message.findById(newMessage._id)
      .populate('sender', 'name profileImage')
      .populate('recipient', 'name profileImage')
      .exec();
    
    res.status(201).json({ message: populatedMessage });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// File: routes/music.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Music = require('../models/Music');
const User = require('../models/User');
const { isAuthenticated, isDJ } = require('../middleware/auth');

// Set up storage for music and cover images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = file.fieldname === 'music' 
      ? './uploads/music' 
      : './uploads/covers';
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB limit
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'music') {
      // Allow only audio files
      const filetypes = /mp3|wav|ogg/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb(new Error('Only audio files are allowed'));
    } else if (file.fieldname === 'cover') {
      // Allow only image files
      const filetypes = /jpeg|jpg|png|webp/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb(new Error('Only image files are allowed'));
    } else {
      cb(new Error('Unexpected field'));
    }
  }
});

// Upload music
router.post(
  '/upload',
  isAuthenticated,
  isDJ,
  upload.fields([
    { name: 'music', maxCount: 1 },
    { name: 'cover', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      // Check if premium
      if (!req.user.isPremium) {
        return res.status(403).json({
          message: 'Premium account required to upload music',
          requiresUpgrade: true
        });
      }
      
      const { title, description, genres } = req.body;
      
      if (!title || !req.files.music) {
        return res.status(400).json({ message: 'Title and music file are required' });
      }
      
      const parsedGenres = genres ? JSON.parse(genres) : [];
      
      // Create new music entry
      const newMusic = new Music({
        title,
        artist: req.user._id,
        fileUrl: `/uploads/music/${req.files.music[0].filename}`,
        description,
        genres: parsedGenres
      });
      
      // Add cover image if uploaded
      if (req.files.cover) {
        newMusic.coverImage = `/uploads/covers/${req.files.cover[0].filename}`;
      }
      
      await newMusic.save();
      
      // Populate artist info
      const populatedMusic = await Music.findById(newMusic._id)
        .populate('artist', 'name')
        .exec();
      
      res.status(201).json({ music: populatedMusic });
    } catch (err) {
      console.error('Error uploading music:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Get all music
router.get('/', async (req, res) => {
  try {
    const music = await Music.find()
      .populate('artist', 'name profileImage')
      .sort({ createdAt: -1 })
      .exec();
    
    res.json({ music });
  } catch (err) {
    console.error('Error fetching music:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get music by ID
router.get('/:id', async (req, res) => {
  try {
    const music = await Music.findById(req.params.id)
      .populate('artist', 'name profileImage socialLinks')
      .exec();
    
    if (!music) {
      return res.status(404).json({ message: 'Music not found' });
    }
    
    // Increment play count
    await Music.findByIdAndUpdate(
      req.params.id,
      { $inc: { plays: 1 } }
    );
    
    res.json({ music });
  } catch (err) {
    console.error('Error fetching music:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Like/unlike music
router.post('/:id/like', isAuthenticated, async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    
    if (!music) {
      return res.status(404).json({ message: 'Music not found' });
    }
    
    // Check if user already liked the music
    const alreadyLiked = music.likes.includes(req.user._id);
    
    if (alreadyLiked) {
      // Unlike
      await Music.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: req.user._id } }
      );
    } else {
      // Like
      await Music.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likes: req.user._id } }
      );
    }
    
    const