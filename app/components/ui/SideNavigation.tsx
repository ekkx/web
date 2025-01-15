import { SquareDashed } from "lucide-react";
import { ButtonTransparent } from "../shared/ButtonTransparent";
import { Window } from "./Window";

export function SideNavigation() {
  return (
    <Window className="flex flex-col items-center gap-2 w-[68px] mr-6 py-4">
      <ButtonTransparent className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15">
        <SquareDashed className="flex-shrink-0" />
      </ButtonTransparent>
      {Array.from({ length: 4 }, (_, i) => (
        <ButtonTransparent
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className="flex items-center justify-center w-11 h-11 rounded-full"
        >
          <SquareDashed className="flex-shrink-0" />
        </ButtonTransparent>
      ))}
    </Window>
  );
}
