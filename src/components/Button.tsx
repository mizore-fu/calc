import React, { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="p-4 border" onClick={onClick}>
      {text}
    </button>
  );
};
