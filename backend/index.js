import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { connectDB } from './db.js';
import {expenseRouter} from './router/expense.router.js';
import cors from 'cors';

const app = express();
try {
    connectDB();
} catch (error) {
    console.log("Error connecting DB");
    
}


app.use(cors());

app.get('/', (req, res)=> {
    return res.send("Hello World");
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/expenses', expenseRouter);


app.listen('3000',() => {
    console.log('server running on http://localhost:3000');
    
})