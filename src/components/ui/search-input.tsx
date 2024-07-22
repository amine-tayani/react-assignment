import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
      <Input
        type="search"
        placeholder="Search workers ..."
        className="w-full border-gray-300 focus:border focus:border-gray-400 placeholder:text-gray-400 rounded-md pl-8 md:w-[250px] lg:w-[365px]"
      />
    </div>
  );
}
