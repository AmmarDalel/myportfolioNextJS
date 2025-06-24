import React from "react";
import Image from "next/image";
import { portfolioImageURL } from "@/Data/data";

const ProfileImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-start">
      <div className="relative">
        {/* Decorative circles */}
        <div className="absolute left-3 w-24 h-24 bg-orange-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-16 z-10 -right-6 w-16 h-16 bg-yellow-400 rounded-full"></div>

        {/* Main profile image */}
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-orange-500">
            <Image
              src={portfolioImageURL}
              alt="Saira Karim"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
