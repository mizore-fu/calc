import React, { FC } from "react";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => {
  return <button className="p-4 border">{text}</button>;
};
