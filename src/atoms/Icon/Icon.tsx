import React, { FC } from "react";

interface IIconProps {
  name: string;
}

const Icon: FC<IIconProps> = ({ name }) => {
  let code = null;
  switch (name) {
    case "cross":
      code = <span>⨯</span>;
      break;
    case "magnifier":
      code = <span>🔎</span>;
      break;
  }
  return code;
};

export default Icon;
