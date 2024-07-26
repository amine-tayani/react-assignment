import { Icons } from "../icons";

function SafetyCard() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-y-1">
        <img src="/assets/safety-card-1.png" alt="safety" />
        <div className="flex items-center pt-2 justify-between">
          <span className="text-xs text-gray-500">Comment</span>
          <div className="flex items-center space-x-2">
            <Icons.Horloge className="h-4 w-4" />
            <span className="text-xs text-gray-500">15/11/2022</span>
            <span className="text-xs text-gray-500">12:00</span>
            <p className="">#03</p>
          </div>
        </div>
        <div className="p-2 bg-[#F8F8F8] border border-gray-200 rounded-md">
          <p className="text-xs text-left text-gray-800">
            consectetur adipiscing elit, do eiusmod tempor incididunt ut labore
            et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <img src="/assets/safety-card-2.png" alt="safety-2" />
        <div className="flex items-center pt-2 justify-between">
          <span className="text-xs text-gray-500">Comment</span>
          <div className="flex items-center space-x-2">
            <Icons.Horloge className="h-4 w-4" />
            <span className="text-xs text-gray-500">15/11/2022</span>
            <span className="text-xs text-gray-500">10:30</span>
            <p className="">#07</p>
          </div>
        </div>
        <div className="p-2 bg-[#F8F8F8] border border-gray-200 rounded-md">
          <p className="text-xs text-left text-gray-800">
            consectetur adipiscing elit, do eiusmod tempor incididunt ut labore
            et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore
          </p>
        </div>
      </div>
    </div>
  );
}

export default SafetyCard;
