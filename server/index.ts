import express from "express";
import cors from "cors";
import { getSchematicToken } from "./routes/schematic-token";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/ping", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Schematic token exchange
app.post("/api/schematic/token", getSchematicToken);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
