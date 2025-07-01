import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ActionButtons = () => {
  return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full cursor-pointer">
          <a href="mailto:ammardalel07@gmail.com">Contact me</a>
      </Button>

      <a
        href="/cv.pdf"
        download
        className="border border-gray-600 hover:text-gray-800 hover:bg-gray-700 bg-gray-800 text-orange-500 px-8 py-3 rounded-full flex items-center justify-center transition"
      >
        <Download className="w-4 h-4 mr-2" />
        Download my resume
      </a>
    </div>
  );
};

export default ActionButtons;
