import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClicked: () => void;
}

export const Like = ({ onClicked }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    {
      setStatus(!status);
      onClicked();
    }
  };

  if (status)
    return (
      <div>
        <AiFillHeart color="#ff6b81" size={40} onClick={toggle} />
      </div>
    );
  return (
    <div>
      <AiOutlineHeart size={40} onClick={toggle} />
    </div>
  );
};
 