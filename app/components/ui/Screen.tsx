import type { ReactNode } from "react";
import { Window } from "./Window";

export function Screen({ children }: { children: ReactNode }) {
  return <Window className="w-full h-full">{children}</Window>;
}
