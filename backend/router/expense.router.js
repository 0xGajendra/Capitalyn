import express from "express";
import { getAllExpenses, addExpense, deleteExpense, updateExpense } from "../controllers/expense.controller.js";

const router = express.Router();

// Route to get all expenses
router.get("/", getAllExpenses);
router.post("/", addExpense);
router.delete("/:id", deleteExpense);
router.put("/:id", updateExpense);

export const expenseRouter = router;