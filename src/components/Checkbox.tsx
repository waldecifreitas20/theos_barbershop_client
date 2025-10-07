import { useState } from "react";
import { Input, type InputProps } from "./Input";

interface CheckboxProps extends InputProps {
  label: string;
}

export function Checkbox(props: CheckboxProps) {
  const inputId = `checkbox${Math.random()}`
  const [isChecked, setIsChecked] = useState(true);

  function handleChange() {
    setIsChecked(prev => !prev);
  }

  return (
    <div className="flex items-center text-sm gap-1 w-fit cursor-pointer select-none">
      <Input
        id={inputId}
        type="checkbox"
        name={props.name}
        checked={isChecked}
        value={isChecked}
        shouldValidate={props.shouldValidate}
        onChange={(evt) => handleChange()}
      />
      <label htmlFor={inputId}>{props.label}</label>
    </div>
  );
}