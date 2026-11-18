import type { ComponentProps } from "react";
import "./Butao.css";

interface butaoProps extends ComponentProps<"button"> {
  texto: string;
}

export function Butao({ texto, ...props }: butaoProps) {
  return (
    <>
      <button {...props}>{texto}</button>
    </>
  );
}
