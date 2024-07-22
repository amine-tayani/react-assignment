import { ChevronDown } from "lucide-react";
import SearchInput from "@/components/ui/search-input";
import DatePicker from "../datepicker";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
import EquipementTable from "./table";

function TableContainer() {
  return (
    <div className="flex-1 space-y-4 p-12 pt-10">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold text-gray-700">
          P.P.E Violations Table
        </h2>
        <div className="flex items-center space-x-2">
          <SearchInput />
          <DatePicker />
          <Button
            variant={"outline"}
            className="w-[220px] flex justify-between pl-3 text-left font-normal"
          >
            <span className="text-gray-400">All Contractors</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Icons.Maximize className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <EquipementTable />
    </div>
  );
}

export default TableContainer;
