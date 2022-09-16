import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(16, 8, 2022);
  const expenseTitle = "Car Insurance";
  const expensePrice = 294.75;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
