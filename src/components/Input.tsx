import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
  return (
    <input className="block w-full outline-0 p-2 bg-zinc-800/50" {...props} />
  );
}