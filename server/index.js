import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "./models/Portfolio.js";
import fallbackData from "./data/portfolioData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
    credentials: true,
  }),
);
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

app.get(["/", "/home"], (_req, res) => {
  res.json({
    message: "Portfolio API",
    endpoints: ["/api/portfolio", "/resume", "/vlogs"],
  });
});

app.get("/resume", (_req, res) => {
  const resumeId = "18tdkE07_MSRC1-taylQPaKOvo6x5XMNj";
  const resumePreviewUrl = `https://drive.google.com/file/d/${resumeId}/preview`;
  const resumeViewUrl = `https://drive.google.com/file/d/${resumeId}/view?usp=sharing`;
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;
  const resumePhotos = (
    process.env.RESUME_PHOTOS || "http://localhost:5173/linkedinprofile.jpg"
  )
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
  res.json({
    resumePreviewUrl,
    resumeViewUrl,
    resumeDownloadUrl,
    photos: resumePhotos,
  });
});

app.get("/vlogs", (_req, res) => {
  res.json({ vlogs: fallbackData.vlogs || [] });
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
