import { useState, useEffect } from "react";
import { SchematicEmbed } from "@schematichq/schematic-components";
import { useSafeAuth } from "@/hooks/useSafeAuth";

const COMPONENT_ID = "cmpn_EQXPQm2Tdw5";

export default function SchematicPricing() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isSignedIn } = useSafeAuth();

  useEffect(() => {
    const fetchToken = async () => {
      if (!isSignedIn) {
        setLoading(false);
        return;
      }

      try {
        // Get Clerk session token
        const clerkToken = await (window as any).Clerk?.session?.getToken();

        if (!clerkToken) {
          throw new Error("No Clerk token available");
        }

        // Exchange for Schematic token
        const response = await fetch("/api/schematic/token", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${clerkToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Token exchange failed: ${response.statusText}`);
        }

        const data = await response.json();
        setToken(data.token);
      } catch (err) {
        console.error("Failed to get Schematic token:", err);
        setError(err instanceof Error ? err.message : "Failed to load pricing");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [isSignedIn]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading pricing options...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load pricing</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Sign in to view pricing
          </h3>
          <p className="text-muted-foreground">
            Please sign in to see personalized pricing options
          </p>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-muted-foreground">
            Unable to load pricing at this time
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SchematicEmbed
        accessToken={token}
        id={COMPONENT_ID}
        style={{
          width: "100%",
          minHeight: "600px",
          border: "none",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
