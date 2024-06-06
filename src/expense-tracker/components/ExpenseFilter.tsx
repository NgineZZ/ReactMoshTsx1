import Categories from "./Categories";


// import React from 'react';

interface Props {
  onSelectCategory: (category: string)=>void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <div>
      <select className='form-select' onChange={(event)=>{onSelectCategory(event.target.value)}}>
        <option value="">All Categories</option>
        {Categories.map(c=><option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}

export default ExpenseFilter;