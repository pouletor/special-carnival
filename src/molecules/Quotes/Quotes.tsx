import React, { FC } from "react";
import Quote from "../../atoms/Quote/Quote";
import "./Quotes.scss";

export interface IQuotesProps {
  total: number;
  result: [];
  active: boolean;
}

const Quotes: FC<IQuotesProps> = ({ total, result, active = false }) => {
  if (!active) return null;
  if (!total) {
    return <div className="quotes__no-results">Oops there is no results</div>;
  }
  return (
    <div className="quotes">
      {result.map(({ value }, index) => (
        <Quote key={index} value={value} />
      ))}
    </div>
  );
};

export default Quotes;
