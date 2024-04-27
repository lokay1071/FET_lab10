import React from "react";

const ExpenseFilter = (props) => {
    const changeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <div className="expense-filter">
            <label>Filter by year</label>
            <select value={props.selectedYear} onChange={changeHandler}>
                {props.availableYears.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ExpenseFilter;
