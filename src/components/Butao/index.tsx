import type { ComponentProps } from "react";
import "./Butao.css";
import type React from "react";

interface butaoProps extends ComponentProps<"button"> {
  texto: React.ReactNode;
}

export function Butao({ texto, ...props }: butaoProps) {
  return (
    <>
      <button className="butao" {...props}>
        {texto}
      </button>
    </>
  );
}
