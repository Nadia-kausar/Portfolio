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

// Root route for status check
app.get('/', (req, res) => {
  res.json({
    status: 'active',
    error: false,
    message: 'Portfolio Contact API is running'
  });
});

// Contact Routes
app.use('/api', contactRoutes);

// MongoDB Atlas Connection
const mongoURI = "mongodb+srv://adminnn:adminn1234@cluster1.mbb4kfq.mongodb.net/portfolio-contact?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});
