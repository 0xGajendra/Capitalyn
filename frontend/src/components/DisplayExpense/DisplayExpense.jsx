import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import axios from 'axios';
const DisplayExpense = () => {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/expenses`);
                console.log(response.data);
                setExpenses(response.data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };
        fetchData();
    }, []);


  return (
    <div className='bg-black rounded-2xl'>
        <Table>
  <TableCaption>All Your Expenses At One Place</TableCaption>
  <TableHeader >
    <TableRow>
      <TableHead className="w-[200px] text-white">Amount (INR)</TableHead>
      <TableHead className="text-white w-50">Date</TableHead>
      <TableHead className="text-right text-white">Description</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {expenses.map((expense) => (
    <TableRow key={expense._id}>
    <TableCell className="font-medium">{expense.amount}</TableCell>
    <TableCell>{expense.date}</TableCell>
    <TableCell className="text-right">{expense.description}</TableCell>
  </TableRow>
  ))}
    
  </TableBody>
</Table>
    </div>
  )
}

export default DisplayExpense
