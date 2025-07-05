import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

// Create Convex client only if URL is provided
const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

function AppWrapper() {
  const content = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // If Convex is available, wrap with ConvexProvider
  if (convex) {
    return <ConvexProvider client={convex}>{content}</ConvexProvider>;
  }

  // Otherwise render without Convex
  return content;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);
