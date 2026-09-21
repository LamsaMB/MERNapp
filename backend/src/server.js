import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 5001;

connectDB();

app.use('/api/note', noteRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 


