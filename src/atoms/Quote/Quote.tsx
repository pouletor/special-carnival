import React, { FC } from "react";

import "./Quote.scss";

interface IQuoteProps {
  value: string;
}

const Quote: FC<IQuoteProps> = ({ value }) => {
  return <q className="quote">{value}</q>;
};

export default Quote;
