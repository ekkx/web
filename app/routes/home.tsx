import { ChevronRightIcon } from "lucide-react";
import { ButtonTransparent } from "~/components/shared/ButtonTransparent";
import { Navigation } from "~/components/ui/Navigation";
import { NavigationBar } from "~/components/ui/NavigationBar";
import { Screen } from "~/components/ui/Screen";
import { SideNavigation } from "~/components/ui/SideNavigation";
import { Sidebar } from "~/components/ui/Sidebar";

export function meta() {
  return [{ title: "ekkx" }, { name: "description", content: "ekkx/web" }];
}

export default function Home() {
  return (
    <div className="flex justify-center items-center w-dvw h-dvh">
      <img
        src="/images/bg-dark.png"
        alt=""
        className="fixed inset-y-0 w-full h-full object-cover"
      />
      <div className="relative flex items-center sm:scale-[.45] md:scale-[.55] lg:scale-[.7] xl:scale-[.78] 2xl:scale-100">
        <SideNavigation />
        <div className="grid place-items-center w-[1280px] h-[720px]">
          <Screen>
            <div className="sticky inset-y-0 left-0 w-[320px] flex-shrink-0">
              <Sidebar />
            </div>
            <div className="w-full h-full overflow-x-auto">
              <NavigationBar />
              <div className="w-[780px] mx-auto text-white">
                <div className="flex items-start h-8 px-5">
                  <span className="font-semibold text-lg">Header text</span>
                </div>
                <div className="bg-black/20 rounded-[16px] overflow-hidden">
                  {Array.from({ length: 4 }, (_, i) => (
                    <ButtonTransparent
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={i}
                      className="flex items-center justify-between w-full h-[60px] px-5 rounded-none border-b border-[#FFFFFF]/10 last:border-0"
                    >
                      Title
                      <ChevronRightIcon className="w-5 opacity-60" />
                    </ButtonTransparent>
                  ))}
                </div>
                <div className="flex items-end h-[26px] px-5">
                  <span className="text-sm opacity-60">Footer text</span>
                </div>
              </div>
            </div>
          </Screen>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
