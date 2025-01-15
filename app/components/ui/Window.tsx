import type { ReactNode } from "react";
import { cn } from "~/utils/style";

export function Window({
  className,
  children,
}: { className?: string; children: ReactNode }) {
  return (
    // <div
    //   className={cn(
    //     "w-[320px] h-[162px] p-[2px] rounded-[32px] drop-shadow-md bg-gradient-to-br from-white/5 from-0% via-white/0 via-60% to-white/5 to-100%",
    //     classNames?.wrapper,
    //   )}
    // >
    <div
      className={cn(
        "flex bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
    // </div>
  );
}
