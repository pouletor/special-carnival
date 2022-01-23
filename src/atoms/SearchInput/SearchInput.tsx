import React, { FC, useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { useOutside } from "../../hooks/useOutside";
import Icon from "../Icon/Icon";

import "./SearchInput.scss";

interface ISearchInputProps {
  isBlur?: boolean;
  onApply?: (value: string) => void;
  onClear?: () => void;
  onMouseEnter?: () => void;
  placeholder: string;
  value?: string;
}

const SearchInput: FC<ISearchInputProps> = ({
  isBlur,
  onApply,
  onClear,
  onMouseEnter,
  placeholder,
  value: defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue, isBlur]);

  const handleClear = () => {
    setValue("");
    onClear && onClear();
  };

  const handleApply = () => {
    onApply && onApply(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      handleClear();
    } else if (event.key === "Enter") {
      handleApply();
    }
  };

  const handleBlur = () => {
    setValue(defaultValue || "");
  };

  useOutside(inputRef, handleBlur);

  return (
    <div className="search-input__wrapper" ref={inputRef}>
      <button
        className="search-input__icon search-input__icon--left"
        onClick={() => handleClear()}
        hidden={!value.length}
        data-testid="search-input__icon-close"
      >
        <Icon name="cross" />
      </button>
      <input
        type="text"
        className={classNames("search-input", {
          "search-input__with-left-icon": value.length,
        })}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        onMouseEnter={onMouseEnter}
        placeholder={placeholder}
        value={value}
      />
      <button
        className="search-input__icon search-input__icon--right"
        onClick={handleApply}
        data-testid="search-input-icon-search"
      >
        <Icon name="magnifier" />
      </button>
    </div>
  );
};

export default SearchInput;
