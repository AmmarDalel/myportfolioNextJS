import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full cursor-pointer">
        Contact me
      </Button>
      <Button
        variant="outline"
        className="border-gray-600 hover:text-gray-800 hover:cursor-pointer bg-gray-800 text-orange-500 px-8 py-3 rounded-full"
      >
        <Download className="w-4 h-4 mr-2" />
        Download my resume
      </Button>
    </div>
  );
};

export default ActionButtons;
