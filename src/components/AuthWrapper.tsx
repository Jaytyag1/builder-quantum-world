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
              baseTheme: undefined,
              elements: {
                rootBox: "mx-auto",
                card: "bg-background border border-border/40 shadow-2xl backdrop-blur-sm",
                headerTitle: "text-foreground",
                headerSubtitle: "text-muted-foreground",
                socialButtonsBlockButton:
                  "border border-border/40 hover:bg-secondary/50",
                socialButtonsBlockButtonText: "text-foreground",
                dividerLine: "bg-border",
                dividerText: "text-muted-foreground",
                formFieldLabel: "text-foreground",
                formFieldInput:
                  "bg-background border-border/40 text-foreground focus:border-brand-purple",
                formButtonPrimary:
                  "bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white",
                footerActionLink: "text-brand-purple hover:text-brand-blue",
                identityPreviewText: "text-foreground",
                formFieldSuccessText: "text-green-400",
                formFieldErrorText: "text-red-400",
                alertText: "text-foreground",
                formFieldWarningText: "text-yellow-400",
                otpCodeFieldInput:
                  "bg-background border-border/40 text-foreground",
                formResendCodeLink: "text-brand-purple hover:text-brand-blue",
              },
              variables: {
                colorPrimary: "#9a4dff",
                colorSuccess: "#22c55e",
                colorWarning: "#eab308",
                colorDanger: "#ef4444",
                colorNeutral: "#71717a",
                colorText: "#f4f4f6",
                colorTextSecondary: "#a1a1aa",
                colorBackground: "#070911",
                colorInputBackground: "#070911",
                colorInputText: "#f4f4f6",
                borderRadius: "0.75rem",
                fontFamily: "inherit",
              },
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
