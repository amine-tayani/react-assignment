import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableHeader,
} from "@/components/ui/table";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { equipments, workers } from "./data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SafetyCard from "./safety-card";

type Equipment = {
  name: string;
  items: number;
  priority: string;
};

export default function EquipementTable() {
  const renderEquipmentCell = (equipment: Equipment) => {
    if (!equipment || equipment.items === 0) {
      return <span className="text-neutral-400 text-xl">-</span>;
    }

    const bgColor =
      equipment.priority === "high"
        ? "bg-[#EF3C3C] text-white"
        : "bg-[#F8CC23] text-[#313131]";

    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <span
            className={`${bgColor} rounded-full h-8 w-8 flex items-center justify-center`}
          >
            {equipment.items}
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-[296px] h-[300px] overflow-y-auto">
          <SafetyCard />
        </HoverCardContent>
      </HoverCard>
    );
  };
  return (
    <div className="overflow-x-auto relative h-[500px] ">
      <Table className="bg-white rounded-md">
        <TableHeader>
          <TableRow className=" h-40">
            <TableHead className="border-r">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="link" size="icon" className="h-5 w-5">
                    <Icons.Gear className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-4" align="start">
                  <p className="text-neutral-500 text-sm mb-3">
                    Select columns to display
                  </p>

                  {equipments.map((equipment) => {
                    return (
                      <div
                        key={equipment.name}
                        className="flex items-center space-x-3 my-2"
                      >
                        <Checkbox defaultChecked={true} />
                        <span className="font-normal text-sm">
                          {equipment.name}
                        </span>
                      </div>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </TableHead>
            <TableHead className="border-r text-center">Workers</TableHead>
            {equipments.map((equipment) => (
              <TableHead key={equipment.name} className="text-center">
                <div className="flex flex-col items-center space-y-1">
                  <img src={equipment.image} alt={equipment.name} />
                  <span className="text-xs">{equipment.name}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {workers.map((worker, index) => (
            <TableRow className="h-20" key={index + 1}>
              <TableCell className="border-r">{index + 1}</TableCell>
              <TableCell className="font-medium flex items-center justify-between w-[240px] border-r">
                <div className="flex items-center space-x-2">
                  <img
                    src="/src/assets/photo.png"
                    alt={worker.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div>{worker.name}</div>
                    <div className="text-sm text-gray-500">{worker.role}</div>
                  </div>
                </div>
                <div>
                  <img src="/src/assets/img.png" alt="biowanze" />
                </div>
              </TableCell>
              {equipments.map((equipment) => (
                <TableCell key={equipment.name} className="text-center">
                  {renderEquipmentCell(
                    worker.equipments.find((e) => e.name === equipment.name)
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
