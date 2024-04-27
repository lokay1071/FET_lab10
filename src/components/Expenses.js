import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("All");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let filteredExpenses = props.expenses;

    if (!filteredExpenses || filteredExpenses.length === 0) {
        return (
            <Card className="expenses">
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        "justify-content": "center",
                    }}
                >
                    No expenses
                </div>
            </Card>
        );
    }

    if (filteredYear !== "All") {
        filteredExpenses = props.expenses.filter(
            (expense) =>
                expense.date.toDate().getFullYear().toString() === filteredYear
        );
    }

    return (
        <Card className="expenses">
            <ExpenseFilter
                selectedYear={filteredYear}
                availableYears={getUniqueYears(props.expenses)}
                onFilterChange={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

const getUniqueYears = (expenses) => {
    const years = new Set();
    expenses.forEach((expense) => {
        years.add(expense.date.toDate().getFullYear().toString());
    });
    return ["All", ...Array.from(years)];
};

export default Expenses;
