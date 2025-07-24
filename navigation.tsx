import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Music, Menu, Heart, Calendar, MessageCircle, BarChart3, Shield, LogOut, User, ShoppingBag, Sparkles, Users, Headphones, Newspaper } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const { user } = useAuth();
  const [location] = useLocation();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/discover', label: 'Discover', icon: Heart },
    { href: '/events', label: 'Events', icon: Calendar },
    { href: '/chat', label: 'Messages', icon: MessageCircle },
    { href: '/newsfeed', label: 'Community', icon: Newspaper },
    { href: '/crews', label: 'Crews', icon: Users },
    { href: '/rave-buddies', label: 'Buddies', icon: Shield },
    { href: '/marketplace', label: 'Marketplace', icon: ShoppingBag },
    { href: '/dj-discovery', label: 'DJs', icon: Headphones },
    { href: '/safety', label: 'Safety & Harm Reduction', icon: Shield },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  if (!user) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Music className="text-xl sm:text-2xl text-neon-blue" />
              <span className="text-lg sm:text-xl font-bold neon-text hidden sm:block">Together We Rave</span>
              <span className="text-lg font-bold neon-text sm:hidden">TWR</span>
            </div>
          </Link>

          {/* User Menu and Navigation Dropdown */}
          <div className="flex items-center space-x-4">
            {/* Navigation Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 hover:text-neon-blue hover:bg-white/5">
                  <Menu className="w-5 h-5" />
                  <span className="hidden md:inline">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-700">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <DropdownMenuItem key={href} className="p-0">
                    <Link href={href} className="w-full">
                      <div className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors ${
                        location === href 
                          ? 'bg-neon-blue/20 text-neon-blue' 
                          : 'hover:bg-white/5 hover:text-neon-blue'
                      }`}>
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem 
                  className="p-0"
                  onSelect={() => window.location.href = '/api/logout'}
                >
                  <div className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-red-400/10 hover:text-red-400 w-full">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Avatar */}
            <Avatar className="border-2 border-neon-purple">
              <AvatarImage src={user.profileImageUrl || undefined} />
              <AvatarFallback>
                {user.firstName?.[0] || user.email?.[0] || '?'}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
