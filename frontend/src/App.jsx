import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Calendar } from './components/ui/calendar';
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !date) {
      alert("Please provide required fields");
      return;
    }
    
      try{
        const response = await axios.post("http://localhost:3000/api/expenses", {
          amount,
          date,
          description
        });
        console.log(response.data);
        setAmount("");
        setDate("");
        setDescription("");
      }
      catch (error) {
        console.log("Error in Adding expense", error.message);
      }

  }

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <h2 className='text-4xl text-center mb-10'>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center space-y-4'>
          <Input
            type="number"
            placeholder="Amount"
            className="w-72"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Date"
            className="w-72"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Calendar
              mode="single"
              selected={date}
              onSelect={(e)=> (setDate(e.toString().slice(0,15)))}
              className="rounded-md border"
            />
          <Input
            type="text"
            placeholder="Description"
            className="w-72 h-20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-white text-black hover:bg-gray-300 hover:text-gray-900 cursor-pointer"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default App
