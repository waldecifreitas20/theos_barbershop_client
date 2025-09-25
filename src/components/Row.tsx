import type { PropsWithChildren } from "react";

interface RowProps extends PropsWithChildren {
  gap?: string;
}

export function Row(props: RowProps) {
  return (
    <div className={`flex ${props.gap ?? "gap-4"}`}>
      {props.children}
    </div>
  );
}