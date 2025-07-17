import express from 'express';
import { sendMessage } from '../controllers/contact.controller.js';

const router = express.Router();

// No need to repeat '/contact' because it's already used in app.use('/contact', ...)
router.post('/', sendMessage);

export default router;
