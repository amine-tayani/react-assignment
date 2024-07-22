import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Icons } from "./icons";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none flex items-center space-x-2">
          <img
            src="src/assets/besix.jpg"
            alt="Languages"
            className="overflow-hidden"
          />
          <h1>Besix Group</h1>
          <ChevronDown className="ml-auto h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 mr-12 z-50 bg-white rounded-lg space-y-2 shadow-lg border-t px-5 py-4 mt-2 outline-none"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">Besix Group</p>
            <p className="text-sm leading-none text-gray-500">
              besix.group@besix.be
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="flex flex-col space-y-2 py-2">
          <DropdownMenuItem className="flex items-center text-gray-900 outline-none">
            <Icons.Gear />
            <span className="ml-2">Profile Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className=" flex items-center outline-none hover:text-gray-900">
            <Icons.ShieldAlert />
            <span className="ml-2">Our policies</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center text-gray-900 outline-none py-2">
          <Icons.Logout />
          <span className="ml-2">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
