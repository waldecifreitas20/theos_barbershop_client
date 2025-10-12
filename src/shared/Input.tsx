import { useState, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  shouldValidate?: boolean;
  label?: string;
  requiredField?: boolean | undefined;
  onValidate?: (value: string) => boolean;
  invalidText?: string;
  isRequired?: boolean;
  value?: any;
}

export function Input(props: InputProps) {
  const [value, setState] = useState("");
  let isValid = null;
  let borderStyle = "";

  function handleChange(evt: any) {
    setState(prevValue => evt.target.value);
  }


  if (props.shouldValidate && props.isRequired) {
    isValid = props.onValidate!(value) ?? null;
    borderStyle = `${isValid !== true && "border border-red-500"}`;
  }

  return (
    <div className="block w-full">
      {props.label &&
        <p className="text-xs mt-1 font-light">
          {props.label}
          {props.isRequired &&
            <span className="text-blue-500">*</span>
          }
        </p>
      }
      <input className={`
        block w-full 
        outline-0 p-2 
        bg-zinc-800/50
        placeholder:text-sm
        ${borderStyle}
        `}
        autoFocus={isValid === false}
        onChange={handleChange}
        {...props}
      />
      <p className="text-xs mt-1 text-red-400/80 font-light">{isValid === false && props.invalidText}</p>
    </div >
  );
}