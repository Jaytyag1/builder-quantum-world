import { SignIn } from "@clerk/clerk-react";
import { useSafeAuth, isClerkAvailable } from "@/hooks/useSafeAuth";

interface AuthWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AuthWrapper({ children, fallback }: AuthWrapperProps) {
  const { isSignedIn, isLoaded } = useSafeAuth();

  // If Clerk is not available, just render children (fallback to localStorage mode)
  if (!isClerkAvailable()) {
    return <>{children}</>;
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Welcome to InvoIQ
            </h1>
            <p className="text-muted-foreground">
              Sign in to manage your invoices
            </p>
          </div>
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: "gradient-bg hover:opacity-90",
                card: "glass border-brand-purple/30",
              },
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
