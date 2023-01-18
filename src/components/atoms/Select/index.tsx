import { useState } from "react";
import "./select.css";

type SelectProps = {
  id: string;
  defaultValue: string;
  title?: string;
  options: Array<{ value: string; label: string }>;
  setValue: (value: string) => void;
  [rest: string]: any;
};

const Select = ({
  id,
  defaultValue,
  options,
  title,  
  setValue,
  ...rest
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options[0].value
  );
  const onSelectChange = (value: string) => {
    setSelectedOption(value);
    setValue(value);
  };
  return (
    <>
      <label className="select-label" htmlFor={`select-${id}`}>{title}</label>
      <select
        className="select"
        id={`select-${id}`}
        value={selectedOption}
        onChange={(e) => onSelectChange(e.target.value)}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
