import { useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const DeleteList = () => {
  const [artists, setArtist] = useState(initialArtists);

  const handleClick = (i: number) => {
    setArtist(artists.filter((a) => a.id !== i));
  };
  return (
    <>
      <ul>
        {artists.map((ar) => (
          <li key={ar.id} style={{ padding: 10 }}>
            {ar.name} <button onClick={() => handleClick(ar.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DeleteList;
