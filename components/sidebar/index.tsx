import Settings from "../settings";
import { Menus } from "./sidebar";

export default function Sidebar() {
  return (
    <div className="min-w-full p-8 flex justify-between items-center bg-black">
      <div className="flex gap-2">
        {Menus.map((menu, key) => (
          <div
            key={key}
            className="bg-black py-1 px-3 rounded-[15px] cursor-pointer text-white hover:text-black hover:bg-white"
          >
            {menu.name}
          </div>
        ))}
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}
