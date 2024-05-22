import { useState } from "react";

const initialCounter = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounter] = useState(initialCounter);

  const handleClick = (index: number) => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounter(nextCounters);
  };

  return (
    <>
      <ul>
        {counters.map((c, i) => (
          <li key={i} style={{ padding: 10 }}>
            {c} <button onClick={() => handleClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CounterList;
