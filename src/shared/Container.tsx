import type { PropsWithChildren } from "react";

export function Container(props: PropsWithChildren) {
  return (
    <div className="px-4 md:w-[90%] lg:w-[70%] max-w-[1200px] mx-auto w-full">
      {props.children}
    </div>
  );
}