import type { PropsWithChildren } from "react";

interface RowProps extends PropsWithChildren {
  gap?: string;
  forceRow?: boolean;
}

export function Row(props: RowProps) {
  return (
    <div className={`flex ${!props.forceRow && "flex-col sm:flex-row"} ${props.gap ?? "gap-4"}`}>
      {props.children}
    </div>
  );
}