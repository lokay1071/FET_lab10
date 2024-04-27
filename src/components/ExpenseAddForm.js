import React, { useState } from "react";
import Card from "./Card";
import { Timestamp } from "firebase/firestore";

const ExpenseAddForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    };

    const cancelHandler = () => {
        setShowForm(false);
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: Timestamp.fromDate(new Date(enteredDate)),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <Card className="add-form">
            {showForm ? (
                <form onSubmit={submitHandler}>
                    <div className="add-form__items">
                        <div className="add-form__item">
                            <label>Title</label>
                            <input
                                type="text"
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                                required
                            />
                        </div>
                        <div className="add-form__item">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                                required
                            />
                        </div>
                        <div className="add-form__item">
                            <label>Date</label>
                            <input
                                type="date"
                                min="1900-01-01"
                                value={enteredDate}
                                onChange={dateChangeHandler}
                                required
                            />
                        </div>
                    </div>
                    <div className="add-form__buttons">
                        <button type="button" onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            ) : (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
        </Card>
    );
};

export default ExpenseAddForm;
