import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ExpenseChart = () => {
    const [expenses, setExpenses] = useState([]);
    
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
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
    <div className='bg-black border border-white rounded-2xl p-5 my-10'>
        <LineChart width={600} height={300} data={expenses} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </div>
  )
}

export default ExpenseChart
