import Expense from "../models/expenses.model.js";


export const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        return res.status(200).json(...expenses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const addExpense = async (req, res) => {
    const {amount,date,description} = req.body;
    if (!amount || !date) {
        return res.status(400).json({ message: "Please provide required fields" });
    }
    const newExpense = new Expense({
        amount,
        date,
        description,
    });
    try {
        await newExpense.save();
        return res.status(201).json(newExpense);
    } catch (error) {
        console.log("Error in Adding expense", error.message);
        
        return res.status(500).json({ message: error.message });
    }
}

export const deleteExpense = async (req, res) => {
    const expenseID = req.params.id;
    try {
        const deletedExpense = await Expense.findByIdAndDelete(expenseID);
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        return res.status(200).json(deletedExpense);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateExpense = async (req, res) => {
    const id = req.params.id;
    const { amount, date, description } = req.body;
    if(amount || date || description) {
        const updatedExpense = await Expense.findById(id);
        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        if (amount) updatedExpense.amount = amount;
        if (date) updatedExpense.date = date;
        if (description) updatedExpense.description = description;
        await updatedExpense.save();
        return res.status(200).json(updatedExpense); 
        // return res.status(202).json({ message: "updasted" });
    }
}