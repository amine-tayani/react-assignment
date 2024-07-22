import { Calendar } from "@/components/ui/calendar";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function DatePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[220px] pl-3 text-left font-normal",
            date && "text-muted-foreground"
          )}
        >
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} .{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>29/10/2022 . 29/11/2022</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="end">
        <div className="grid gap-2 p-4">
          <span className="text-sm text-gray-400 leading-none">Date range</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex w-40 justify-between items-center space-x-2"
              >
                Custom
                <ChevronDown className="ml-4 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className=" bg-white rounded-lg space-y-2 shadow-lg border-t px-5 py-4 mt-2 outline-none"
            >
              <DropdownMenuItem className="font-normal">
                date range here
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
        />
        <div className="flex items-center space-x-2 my-2 mx-4 justify-end">
          <button className=" py-1 text-gray-400 px-4">Cancel</button>
          <button className="bg-green-500 py-1 rounded-md text-white border border-green-700 px-4">
            Apply
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
