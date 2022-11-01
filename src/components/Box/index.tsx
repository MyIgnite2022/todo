import { HTMLProps, ReactNode } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  mt?: number;
}

export function Box({ children }: ContainerProps) {
 
  return (
    <div>
      { children }
    </div>
  )
}