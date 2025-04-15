
// import toast, { Toaster } from 'react-hot-toast';

import AddExpense from "./components/AddExpense/AddExpense"
import AllExpenses from "./components/Allexpenses/AllExpenses"
import DisplayExpense from "./components/DisplayExpense/DisplayExpense"
import ExpenseChart from "./components/ExpenseChart/ExpenseChart"


const App = () => {
  

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <h2 className='text-4xl text-center mb-10 pt-10 hover:underline'>Expense Tracker</h2>
      <div className='flex flex-col items-center justify-center md:flex-row w-full gap-20'>
        <div className="border border-white rounded-2xl p-5">
        <h3 className='text-2xl mb-5 text-center'>Add Expense</h3>
        <AddExpense/>
        </div>
        <div className="border border-white rounded-2xl p-5">
        <h3 className='text-2xl mb-5 text-center'>Your Expenses</h3>
          <DisplayExpense/>
        </div>
        </div>
        <ExpenseChart/>
        
    </div>
  )
}

export default App
