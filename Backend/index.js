import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('✅ Portfolio backend is running');
});

// 404 Handler (This must be after all other routes)
app.use((req, res, next) => {
  res.status(404).json({
    error: '❌ Route not found',
    path: req.originalUrl
  });
});

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
