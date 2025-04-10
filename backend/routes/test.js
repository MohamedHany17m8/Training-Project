import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Test route is working!" });
});

router.get("/info", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    serverInfo: {
      platform: process.platform,
      nodeVersion: process.version
    }
  });
});

export default router;