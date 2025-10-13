import type { PropsWithChildren } from "react";

interface SectionTitleProps extends PropsWithChildren { }

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className="text-5xl title text-white">Serviços</h2>
  );
}