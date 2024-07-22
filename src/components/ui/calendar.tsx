import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium ",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 bg-transparent p-0 hover:bg-transparent text-gray-400 hover:text-gray-500 opacity-50"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-900 rounded-md w-8 font-medium text-sm",
        row: "flex w-full mt-2",
        cell: cn(
          "h-8 w-8 text-center text-sm p-0 relative",
          "[&:has([aria-selected])]:bg-[#42A4DF]",
          "[&:has([aria-selected].day-range-start)]:rounded-l-full",
          "[&:has([aria-selected].day-range-end)]:rounded-r-full",
          "[&:has([aria-selected])]:first:rounded-l-full",
          "[&:has([aria-selected])]:last:rounded-r-full"
        ),
        day: cn(
          "h-8 w-8 p-0 font-medium aria-selected:bg-[#42A4DF]",
          "hover:bg-[#42A4DF] hover:text-white hover:rounded-full",
          "focus:bg-[#42A4DF] focus:text-white focus:rounded-full"
        ),
        day_range_start: "day-range-start rounded-full",
        day_range_end: "day-range-end rounded-full",
        day_selected:
          "bg-[#42A4DF] text-white rounded-full hover:bg-[#42A4DF] hover:text-white",
        day_outside:
          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-100/50 aria-selected:text-gray-500 aria-selected:opacity-30",
        day_disabled: "text-gray-500 opacity-50 dark:text-gray-400",
        day_range_middle: "aria-selected:bg-[#42A4DF] aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4" {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
