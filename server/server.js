import express from "express";

import cors from "cors";
import 'dotenv/config';
import cookieParse from "cookie-parser";
import connectDB from "./config/mongodb.js";

import authRouter from './routes/authRoutes.js'

const app = express();

const port = process.env.PORT || 8080;

connectDB();
app.use(express.json());
app.use(cookieParse());
app.use(cors({ credentials: true }));
app.use('/api/auth', authRouter)

app.get('/', (req, res) => res.send("API Working fine"));
app.listen(port, () => console.log(`Server is listening on ${port}`))
