import { ChevronLeftIcon, SquareDashed } from "lucide-react";
import { Button } from "../shared/Button";

export function NavigationBar() {
  return (
    <div className="sticky top-0 flex items-center justify-between h-[92px] px-6 text-white">
      <div className="min-w-[104px]">
        <Button className="p-2.5 rounded-full">
          <ChevronLeftIcon />
        </Button>
      </div>
      <span className="font-semibold text-2xl">Title</span>
      <div className="flex justify-end min-w-[104px] space-x-4">
        <Button className="p-2.5 rounded-full">
          <SquareDashed />
        </Button>
        <Button className="p-2.5 rounded-full">
          <SquareDashed />
        </Button>
      </div>
    </div>
  );
}
