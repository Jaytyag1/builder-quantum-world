import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

function AppWrapper() {
  const content = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // If both Convex and Clerk are available, use ConvexProviderWithClerk
  if (convex && PUBLISHABLE_KEY) {
    return (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {content}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    );
  }

  // If only Convex is available, wrap with ConvexProvider
  if (convex) {
    return <ConvexProvider client={convex}>{content}</ConvexProvider>;
  }

  // Otherwise render without any providers (fallback mode)
  return content;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);
