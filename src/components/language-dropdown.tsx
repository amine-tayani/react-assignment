import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export default function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <img
            src="src/assets/language/english.jpg"
            alt="Languages"
            className="overflow-hidden"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 z-50 bg-white text-[#C3C3C3] rounded-lg space-y-2 shadow-lg border-t p-4 mt-4 outline-none"
      >
        <DropdownMenuItem className="flex items-center text-gray-900 outline-none">
          <img
            src="src/assets/language/english.jpg"
            alt="English"
            className="mr-2"
          />
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center outline-none hover:text-gray-900">
          <img
            src="src/assets/language/france.jpg"
            alt="French"
            className="mr-2"
          />
          Français (FR)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center outline-none hover:text-gray-900">
          <img
            src="src/assets/language/nederlands.jpg"
            alt="Dutch"
            className="mr-2"
          />
          Netherlands (Nl)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center outline-none hover:text-gray-900">
          <img
            src="src/assets/language/spain.jpg"
            alt="Spanish"
            className="mr-2"
          />
          Español (ES)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center outline-none hover:text-gray-900">
          <img
            src="src/assets/language/germany.jpg"
            alt="German"
            className="mr-2"
          />
          Deutsch (DE)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
