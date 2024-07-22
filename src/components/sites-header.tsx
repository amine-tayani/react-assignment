import { Separator } from "@radix-ui/react-dropdown-menu";

export default function SitesHeader() {
  return (
    <div className="flex bg-white border-b h-10 items-center font-medium text-gray-400">
      <div className="flex items-center space-x-4">
        <span className="uppercase mr-5 ml-8  text-sm ">Sites</span>
        <Separator className="w-px h-10 bg-gray-200" />
      </div>
      <div className="flex items-center space-x-8 ml-12">
        <span className="text-blue-500">All</span>
        <span>Site 1</span>
        <span>Site 2</span>
        <span>Site 3</span>
        <span>Site 4</span>
      </div>
    </div>
  );
}
