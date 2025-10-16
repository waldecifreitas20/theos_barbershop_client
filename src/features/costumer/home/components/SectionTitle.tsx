import type { PropsWithChildren } from "react";

interface SectionTitleProps extends PropsWithChildren {
  margins?: string;
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className={`text-4xl title ${props.margins ?? "mb-10"}`}>{props.children}</h2>
  );
}