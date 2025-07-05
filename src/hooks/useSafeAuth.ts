import {
  useAuth as useClerkAuth,
  useUser as useClerkUser,
  useClerk as useClerkInstance,
} from "@clerk/clerk-react";

// Check if Clerk is available
const isClerkAvailable = () => {
  return !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
};

// Safe wrapper for useAuth that doesn't break when ClerkProvider is missing
export function useSafeAuth() {
  if (!isClerkAvailable()) {
    return {
      isSignedIn: false,
      isLoaded: true,
      userId: null,
      sessionId: null,
      actor: null,
      orgId: null,
      orgRole: null,
      orgSlug: null,
      has: () => false,
      signOut: () => Promise.resolve(),
      getToken: () => Promise.resolve(null),
    };
  }

  try {
    return useClerkAuth();
  } catch (error) {
    // Fallback if ClerkProvider is not available
    return {
      isSignedIn: false,
      isLoaded: true,
      userId: null,
      sessionId: null,
      actor: null,
      orgId: null,
      orgRole: null,
      orgSlug: null,
      has: () => false,
      signOut: () => Promise.resolve(),
      getToken: () => Promise.resolve(null),
    };
  }
}

// Safe wrapper for useUser
export function useSafeUser() {
  if (!isClerkAvailable()) {
    return {
      user: null,
      isSignedIn: false,
      isLoaded: true,
    };
  }

  try {
    return useClerkUser();
  } catch (error) {
    return {
      user: null,
      isSignedIn: false,
      isLoaded: true,
    };
  }
}

// Safe wrapper for useClerk
export function useSafeClerk() {
  if (!isClerkAvailable()) {
    return {
      signOut: () => Promise.resolve(),
      openSignIn: () => {},
      openSignUp: () => {},
      openUserProfile: () => {},
      closeSignIn: () => {},
      closeSignUp: () => {},
      closeUserProfile: () => {},
    };
  }

  try {
    return useClerkInstance();
  } catch (error) {
    return {
      signOut: () => Promise.resolve(),
      openSignIn: () => {},
      openSignUp: () => {},
      openUserProfile: () => {},
      closeSignIn: () => {},
      closeSignUp: () => {},
      closeUserProfile: () => {},
    };
  }
}

export { isClerkAvailable };
