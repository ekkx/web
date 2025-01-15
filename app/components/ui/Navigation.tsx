import { ButtonTransparent } from "../shared/ButtonTransparent";
import { Window } from "./Window";

export function Navigation() {
  return (
    <Window className="absolute -bottom-8 flex items-center justify-center gap-2 px-3 h-16">
      <ButtonTransparent className="rounded-full bg-white/15">
        <span>Label</span>
      </ButtonTransparent>
      {Array.from({ length: 4 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <ButtonTransparent key={i} className="rounded-full">
          <span className="opacity-60">Label</span>
        </ButtonTransparent>
      ))}
    </Window>
  );
}
