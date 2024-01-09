import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="flex h-screen">
        <aside className="z-30 -ml-2  ">
          <div>dashboard and map</div>
        </aside>
        <Separator orientation="vertical" className="h-full" />
        <Outlet />
      </div>
    </div>
  );
}
