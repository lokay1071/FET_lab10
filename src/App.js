import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import ExpenseAddForm from "./components/ExpenseAddForm";
import Loader from "./components/Loader";
import "./css/App.css";

import { getExpenses, addExpense } from "./services/firestoreService";

function App() {
    const [expenses, setExpenses] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const expensesData = await getExpenses();
                setExpenses(expensesData);
            } finally {
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);

    console.log(expenses);

    const addExpenseHandler = async (expense) => {
        await addExpense(expense);
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    return (
        <div>
            <ExpenseAddForm onSaveExpenseData={addExpenseHandler} />
            {loading ? (
                <div
                    className="card expenses"
                    style={{
                        color: "white",
                        display: "flex",
                        "justify-content": "center",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <Expenses expenses={expenses} />
            )}
        </div>
    );
}

export default App;
