import React from "react";
import { getTranslations } from "next-intl/server";
import ContactInfo from "./ContactInfo";
import ActionButtons from "./ActionButtons";

const ContentSection = async () => {
  const t = await getTranslations("About");

  return (
    <div className="text-center lg:text-left">
      <h2 className="text-3xl lg:text-1xl xl:text-3xl font-bold mb-6 leading-tight">
        {t("title")}
      </h2>

      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
       {t("paragraph")}
      </p>

      <ContactInfo />
      <ActionButtons />
    </div>
  );
};

export default ContentSection;
