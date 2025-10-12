import { useState, type PropsWithChildren } from "react";
import type { Option } from "../@types/Option";



interface SelectProps extends PropsWithChildren {
  label: string;
  options: Array<Option>;
  onSelected: (option: Option) => void;
}



export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  function toggleSelect() {
    setIsOpen(prevState => {
      return !prevState;
    })
  }


  function handleSelection(evt: any, opt: Option) {
    evt.preventDefault();

    toggleSelect();
    setSelectedOption(opt);
    props.onSelected(opt);
  }

  return (
    <div className="relative">
      <button onClick={() => toggleSelect()} type="button" className="">
        {props.label}
        <span className="text-zinc-300">
          {selectedOption ?
            selectedOption.value : "Selecione uma opção"}x'
        </span>
      </button>
      {
        isOpen && (
          <div id="select-service" className="flex flex-col text-left w-full absolute bg-black">
            {props.options.map(child => {
              return (
                <button
                  className="
                  hover:bg-zinc-950
                  text-left py-1 px-3
                  function handle"
                  type="button"
                  onClick={(evt) => handleSelection(evt, child)}
                >{child.value}</button>
              );
            })}
          </div>
        )
      }


    </div>
  );
}