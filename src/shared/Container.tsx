import type { PropsWithChildren } from "react";

export function Container(props: PropsWithChildren) {
  return (
    <div className="lg:max-w-[1200px] mx-auto w-full">
      {props.children}
    </div>
  );
}