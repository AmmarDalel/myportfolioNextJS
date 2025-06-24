import React from "react";
import ContactInfo from "./ContactInfo";
import ActionButtons from "./ActionButtons";
import { Aboutparagraphe, aboutTitle } from "@/Data/data";

const ContentSection = () => {
  return (
    <div className="text-center lg:text-left">
      <h2 className="text-3xl lg:text-1xl xl:text-3xl font-bold mb-6 leading-tight">
        {aboutTitle}
      </h2>

      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
       {Aboutparagraphe}
      </p>

      <ContactInfo />
      <ActionButtons />
    </div>
  );
};

export default ContentSection;
