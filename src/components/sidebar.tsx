import * as React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo.png";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export interface SidebarProps {
  children: React.ReactNode;
}

export interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export const SidebarContext = React.createContext({
  expanded: false,
});

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = React.useState(true);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col items-center bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex space-x-4 justify-between items-center">
            <img
              src={expanded ? logo : logo2}
              className="overflow-hidden transition-all"
            />
            {expanded && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="h-10 w-10 text"
              >
                <Icons.Hamburger className="w-5 h-5 text-[#C4C4C4]" />
              </button>
            )}
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          {expanded && (
            <div className="border-t px-4 py-5">
              <p className="text-[#939393] text-sm font-semibold">
                @ App name 2021
              </p>
              <div className="text-xs text-gray-400 w-64 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </div>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active }: SidebarItemProps) {
  const { expanded } = React.useContext(SidebarContext);
  return (
    <li
      className={cn(
        "relative flex items-center text-[#C4C4C4] py-2 px-4 my-1 rounded-md cursor-pointer transition-colors group",
        active
          ? "bg-[#42A4DF] text-white"
          : "hover:bg-[#42A4DF] hover:text-white",
        !expanded && active ? "text-[#42A4DF] bg-transparent" : "",
        !expanded ? "hover:text-[#42A4DF] hover:bg-transparent" : ""
      )}
    >
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger> {icon} </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={4}
              side="right"
              className="p-2 text-sm bg-neutral-700 rounded-md text-white"
            >
              <p>{text}</p>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <span
        className={cn(
          "overflow-hidden transition-all text-[#626262] group-hover:text-white text-sm",
          expanded ? "w-48 ml-3" : "w-0",
          active ? "text-white" : "text-[#626262]"
        )}
      >
        {text}
      </span>
    </li>
  );
}
