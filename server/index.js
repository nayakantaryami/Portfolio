import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "./models/Portfolio.js";
import fallbackData from "./data/portfolioData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DEFAULT_MONGODB_URI =
  "mongodb+srv://nayakantaryami324_db_user:Nayak1169@cluster0.ylolqeg.mongodb.net/?appName=Cluster0";
const MONGODB_URI = process.env.MONGODB_URI || DEFAULT_MONGODB_URI;

app.use(cors());
app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

const seedPortfolioIfMissing = async () => {
  if (mongoose.connection.readyState !== 1) {
    return;
  }

  const existingPortfolio = await Portfolio.findOne().lean();

  if (!existingPortfolio) {
    await Portfolio.create(fallbackData);
    console.log("Seeded MongoDB with portfolio data from resume");
  }
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, dbState: mongoose.connection.readyState });
});

app.get("/api/portfolio", async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const savedPortfolio = await Portfolio.findOne().lean();

      if (savedPortfolio) {
        return res.json(savedPortfolio);
      }
    }

    return res.json(fallbackData);
  } catch (error) {
    console.error("Failed to fetch portfolio:", error.message);
    return res.status(500).json({ message: "Failed to fetch portfolio data" });
  }
});

app.listen(PORT, async () => {
  await connectDb();
  await seedPortfolioIfMissing();
  console.log(`Server running at http://localhost:${PORT}`);
});
