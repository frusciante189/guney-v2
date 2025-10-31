"use client";

import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the entire app.
 *
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 *
 * @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error("Error Boundary caught an error:", error, errorInfo);

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // TODO: Send to error tracking service (e.g., Sentry, LogRocket)
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Something went wrong
            </h2>
            <p className="text-text-tertiary mb-6">
              We&apos;re sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-coral text-white px-6 py-3 rounded-full hover:bg-brand-coral/90 transition-colors"
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

/**
 * Default Error Fallback Component
 *
 * Can be used as a fallback UI for ErrorBoundary
 */
export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-text-tertiary mb-2">
          An unexpected error occurred while rendering this section.
        </p>
        {error && (
          <details className="mt-4 text-sm text-left">
            <summary className="cursor-pointer text-text-muted hover:text-text-primary">
              Error details
            </summary>
            <pre className="mt-2 p-4 bg-bg-gray-lighter rounded-lg overflow-auto text-xs">
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-brand-coral text-white px-6 py-3 rounded-full hover:bg-brand-coral/90 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
