import { Button } from "../shared/Button";
import { ButtonTransparent } from "../shared/ButtonTransparent";

export function Sidebar() {
  return (
    <div className="w-full h-full bg-black/20 text-white">
      {/* header */}
      <div className="flex justify-between items-center px-5 py-6">
        <span className="font-semibold text-2xl">Title</span>
        <Button className="h-[44px] rounded-full px-5">Edit</Button>
      </div>
      {/* body */}
      <div className="flex flex-col items-center">
        {Array.from({ length: 6 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <ButtonTransparent key={i} className="flex items-center w-[92%] h-14">
            <img
              src="/images/sidebar-button.png"
              className="mr-4"
              width={28}
              height={28}
              alt=""
            />
            Title
            <span className="ml-auto text-[#727272]">2</span>
          </ButtonTransparent>
        ))}
      </div>
    </div>
  );
}
