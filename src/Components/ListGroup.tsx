import { useState } from "react";

interface Props {
  itemss: string[];
  headingg: string;
}

function ListGroup({ itemss, headingg }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1>{headingg}</h1>
      {itemss.length === 0 && <p>No item found !!</p>}
      <ul className="list-group">
        {itemss.map((item, i) => (
          <li
            className={
              i === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => setIndex(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
