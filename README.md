# MERN Portfolio - Antaryami Nayak

A simple, professional, and aesthetic portfolio website built with the MERN stack and populated from your resume.

## Stack
- **MongoDB Atlas**
- **Express + Node.js** backend API
- **React (Vite)** frontend

## MongoDB
The server is preconfigured with your MongoDB URI and will auto-seed the portfolio data if the collection is empty.

You can still override it by creating `server/.env`:

```bash
MONGODB_URI=mongodb+srv://nayakantaryami324_db_user:Nayak1169@cluster0.ylolqeg.mongodb.net/?appName=Cluster0
PORT=5000
```

## Run locally
```bash
npm run install:all
npm run dev
```

- React app: `http://localhost:5173`
- API server: `http://localhost:5000`

## Useful commands
```bash
npm run dev:server
npm run dev:client
npm run build
```
