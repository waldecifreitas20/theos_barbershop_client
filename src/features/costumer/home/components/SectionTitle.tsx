import type { PropsWithChildren } from "react";

interface SectionTitleProps extends PropsWithChildren { }

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className="text-4xl title mb-10 ">{props.children}</h2>
  );
}