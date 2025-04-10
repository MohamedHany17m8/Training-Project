import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Import routes
import testRoutes from "./routes/test.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://training-project-zeta.vercel.app"
    : "http://localhost:3000";
// Connect to MongoDB

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://training-project-zeta.vercel.app"
        : "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Add favicon handler before static files middleware
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Handle preflight requests
app.options("*", cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/api/test", testRoutes);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Don't exit in production, just log the error
    if (process.env.NODE_ENV !== "production") {
      process.exit(1);
    }
    return null;
  }
};
connectDB();
app.get("/", (req, res) => {
  res.send("API is running....");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Frontend URL: ${FRONTEND_URL}`);
  });
}
export default app;
