import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error boundary caught error:', error, errorInfo);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Component stack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-navy via-dark-purple to-gray-900">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-neon-pink mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-4">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="mt-4 text-left max-w-2xl mx-auto">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Show error details
                </summary>
                <pre className="mt-2 p-4 bg-black/50 rounded text-xs text-red-400 overflow-auto">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-neon-blue to-electric-blue px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;