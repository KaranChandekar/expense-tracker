import Expenses from './components/Expenses/Expenses'

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 18),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 1, 11),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 799.34,
      date: new Date(2022, 5, 25),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 8, 16),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
