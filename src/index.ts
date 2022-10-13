import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import postRouter from './routes/postRouter';
import authUser from './routes/authRouter';
import '../src/database/db';
const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(postRouter);
app.use(authUser);
app.listen(8000, () => console.log("Server start"));