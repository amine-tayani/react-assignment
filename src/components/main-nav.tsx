import LanguageDropdown from "./language-dropdown";
import UserDropdown from "./profile-dropdown";
import { Icons } from "./icons";
import { SidebarContext } from "./sidebar";
import { useContext } from "react";

export function MainNav() {
  const { expanded } = useContext(SidebarContext);

  return (
    <div className="mr-4 flex items-center justify-between py-6 px-8 w-full bg-white border-b h-16">
      <div>
        <a href="/" className="mr-4 flex items-center space-x-6 lg:mr-6">
          {!expanded && <Icons.Hamburger className="w-5 h-5 text-[#C4C4C4]" />}
          <span className="hidden font-bold lg:inline-block text-gray-800">
            Overview
          </span>
        </a>
      </div>

      <nav className="flex items-center gap-4 text-sm lg:gap-6"></nav>
      <div className="flex items-center space-x-12">
        <div className="flex items-center gap-6">
          <Icons.FontSize />
          <Icons.Moon />
          <Icons.Bell />
          <LanguageDropdown />
        </div>

        <UserDropdown />
      </div>
    </div>
  );
}
