import express from 'express';
import 'express-async-errors';
import * as dotenv from 'dotenv';

import connectDB from './config/db';
import messageRouter from './routes/messageRoute';
import streamRouter from './routes/streamRoute';

dotenv.config();

connectDB();

const port = Number(process.env.PORT) || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/message', messageRouter);
app.use('/api/stream', streamRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
