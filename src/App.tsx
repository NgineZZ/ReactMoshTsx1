// import Form3 from "./Components/Form3";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ex, setEx] = useState([
    { id: 1, description: "aa", amount: 10, category: "groceries" },
    { id: 2, description: "bb", amount: 10, category: "groceries" },
    { id: 3, description: "cc", amount: 10, category: "groceries" },
    { id: 4, description: "dd", amount: 10, category: "groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? ex.filter((e) => e.category === selectedCategory)
    : ex;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setEx([...ex, { ...expense, id: ex.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setEx(ex.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
