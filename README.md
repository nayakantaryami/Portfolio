# MERN Portfolio - Antaryami Nayak

A simple, professional, and aesthetic portfolio website built with the MERN stack.

## Stack
- **MongoDB** (optional data persistence)
- **Express + Node.js** backend API
- **React (Vite)** frontend

## Run locally
```bash
npm run install:all
npm run dev
```

- React app: `http://localhost:5173`
- API server: `http://localhost:5000`

## Optional MongoDB setup
Create `server/.env`:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

If MongoDB is not configured, the API serves the resume data from a local fallback file.
