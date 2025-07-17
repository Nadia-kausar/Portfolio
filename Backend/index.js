// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({
    status: 'active',
    error: false,
    message: 'Portfolio Contact API is running',
  });
});

// API routes
app.use('/api', contactRoutes);

// Get MongoDB URI from .env
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('❌ MONGO_URI is not set in .env file');
  process.exit(1);
}

console.log("Connecting to MongoDB with URI:", mongoURI);

// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
  });
