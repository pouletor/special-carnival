import React, { FC } from "react";

interface IHelloProps {
  name: string;
}

const Hello: FC<IHelloProps> = ({ name }) => <h1>Hello {name}!</h1>;

export default Hello;
