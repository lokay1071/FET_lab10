import React from "react";

const ExpenseChart = (props) => {
    const chartData = [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
        { month: "Apr", value: 0 },
        { month: "May", value: 0 },
        { month: "Jun", value: 0 },
        { month: "Jul", value: 0 },
        { month: "Aug", value: 0 },
        { month: "Sep", value: 0 },
        { month: "Oct", value: 0 },
        { month: "Nov", value: 0 },
        { month: "Dec", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.toDate().getMonth();
        chartData[expenseMonth].value += expense.amount;
    }

    const maxExpenses = Math.max(...chartData.map((expense) => expense.value));

    return (
        <div className="chart">
            {chartData.map((dataPoint) => (
                <div key={dataPoint.month} className="chart-bar">
                    <div className="chart-bar__container">
                        <div
                            className="chart-bar__inner"
                            style={{
                                height:
                                    maxExpenses > 0
                                        ? (dataPoint.value / maxExpenses) *
                                              100 +
                                          "%"
                                        : 0,
                            }}
                        ></div>
                    </div>
                    <div className="chart-bar__month">{dataPoint.month}</div>
                </div>
            ))}
        </div>
    );
};

export default ExpenseChart;
