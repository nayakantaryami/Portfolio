import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "./models/Portfolio.js";
import fallbackData from "./data/portfolioData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDb = async () => {
  if (!process.env.MONGODB_URI) {
    console.log("MONGODB_URI not provided. Serving fallback resume data.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/portfolio", async (_req, res) => {
  if (mongoose.connection.readyState === 1) {
    const savedPortfolio = await Portfolio.findOne().lean();

    if (savedPortfolio) {
      return res.json(savedPortfolio);
    }
  }

  return res.json(fallbackData);
});

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server running at http://localhost:${PORT}`);
});
