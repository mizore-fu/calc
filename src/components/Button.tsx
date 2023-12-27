import React, { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="w-full p-4 rounded-md bg-gray-600 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
