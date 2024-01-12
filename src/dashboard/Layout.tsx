import { Separator } from "@/components/ui/separator";
import { DashboardIcon, TransformIcon } from "@radix-ui/react-icons";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-2 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-screen w-full shrink-0 md:sticky md:flex">
          <div className="h-full py-6 pr-10 lg:py-8 ">
            <div className="flex items-center gap-2 mb-8">
              <img src="../src/assets/sun.svg" className="w-[32px]" alt="sun-logo" />
              <span className="text-xl font-semibold lg:text-2xl">Weather Now</span>
            </div>
            <div className="grid grid-flow-row gap-4 auto-rows-max ml-2 text-sm">
              <a className=" px-2 py-1" href="/weather">
                <DashboardIcon className="inline-block mr-4" />
                Dashboard
              </a>
              <a className=" px-2 py-1" href="/weather-map">
                <TransformIcon className="inline-block mr-4" />
                Weather Map
              </a>
            </div>
          </div>
          <Separator orientation="vertical" className="h-screen" />
        </aside>
        <Outlet/>
      </div>
    </div>
  );
}
