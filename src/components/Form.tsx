import type { PropsWithChildren } from "react";

interface FormProps extends PropsWithChildren {
  onSubmit: (form: FormData) => void;
  legend?: string;
}

export function Form(props: FormProps) {

  function handleSubmit(evt: any) {
    evt.preventDefault();

    const form = new FormData(evt.target);
    props.onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
      py-10 px-5 
      max-w-[700px]
      w-full 
      mx-auto 
      rounded-lg 
      bg-black/90 
      text-zinc-100 
      flex flex-col gap-4


      ">
      {
        props.legend && (
          <legend className="title text-3xl">{props.legend}</legend>
        )
      }

      {props.children}
    </form>
  );
}