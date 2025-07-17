import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Basic API Health Check
app.get('/', (req, res) => {
  res.json({
    active: true,
    error: false,
    message: '✅ API is running successfully'
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Check if Mongo URI is present
if (!mongoURI) {
  console.error("❌ MONGO_URI is missing from your .env file");
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Atlas Connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
});
