import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    basics: Object,
    education: Array,
    coursework: Array,
    experience: Array,
    projects: Array,
    achievements: Array,
    skills: Object,
    extracurricular: Object
  },
  { timestamps: true }
);

const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
