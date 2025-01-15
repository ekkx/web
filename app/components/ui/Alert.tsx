import { Window } from "~/components/ui/Window";
import { ButtonTransparent } from "../shared/ButtonTransparent";
import { Separator } from "../shared/Separator";

export function Alert() {
  return (
    <Window className="gap-2">
      <img src="/images/photo.png" alt="" width={52} height={52} />
      <div className="flex flex-col items-center px-4 py-2 gap-[2px]">
        <span className="text-lg font-[700px] leading-6 text-white">Title</span>
        <span className="text-sm leading-5 text-white/60">
          Description text about this alert
        </span>
      </div>
      <Separator />
      <ButtonTransparent className="w-full">Action</ButtonTransparent>
      <ButtonTransparent className="w-full" isDisabled >
        Cancel
      </ButtonTransparent>
    </Window>
  );
}
