import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 5001;

connectDB();
//Middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`requete de type ${req.method} et url ${req.url}`);
    next(); // pour dire de passer au middleware suivant
    });

app.use('/api/note', noteRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 


