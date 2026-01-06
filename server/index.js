import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connnectToDatabase from './db/db.js';

connnectToDatabase();

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
});