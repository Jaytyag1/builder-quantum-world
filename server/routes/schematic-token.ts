import { RequestHandler } from "express";
import { clerkClient } from "@clerk/express";

export const getSchematicToken: RequestHandler = async (req, res) => {
  try {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "No authorization token provided" });
    }

    // Extract the token
    const token = authHeader.replace("Bearer ", "");

    // Verify the Clerk token
    const payload = await clerkClient.verifyToken(token);
    if (!payload) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Get user details from Clerk
    const user = await clerkClient.users.getUser(payload.sub);

    // Create Schematic token request
    const schematicResponse = await fetch(
      "https://api.schematichq.com/components/tokens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Schematic-API-Key": process.env.SCHEMATIC_API_KEY || "", // You'll need to add this
        },
        body: JSON.stringify({
          user_id: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          name: user.fullName || `${user.firstName} ${user.lastName}`,
          traits: {
            email: user.primaryEmailAddress?.emailAddress,
            created_at: user.createdAt,
          },
        }),
      },
    );

    if (!schematicResponse.ok) {
      throw new Error(`Schematic API error: ${schematicResponse.statusText}`);
    }

    const schematicData = await schematicResponse.json();

    res.json({
      token: schematicData.token,
      expires_at: schematicData.expires_at,
    });
  } catch (error) {
    console.error("Schematic token exchange error:", error);
    res.status(500).json({ error: "Failed to exchange token" });
  }
};
