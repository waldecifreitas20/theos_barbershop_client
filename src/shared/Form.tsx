import type { PropsWithChildren } from "react";

interface FormProps<T> extends PropsWithChildren {
  onSubmit: (data: T) => void;
  legend?: string;
}

export function Form<T>(props: FormProps<T>) {

  function handleFormAction(evt: any) {
    evt.preventDefault();

    const form = new FormData(evt.target);
    const data = Object.fromEntries(form.entries())

    props.onSubmit(data as T);
  }

  return (
    <form
      onSubmit={handleFormAction}
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