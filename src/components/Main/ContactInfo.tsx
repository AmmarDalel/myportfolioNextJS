import React from "react";
import { Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { email, lastname, name, phoneNumber } from "@/Data/data";

const ContactInfo = async () => {
  const t = await getTranslations("Contact");

  return (
    <div className="grid sm:grid-cols-3 gap-1 mb-8">
      <div>
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
          <span className="text-orange-500 font-semibold">{t("nameLabel")}</span>
        </div>
        <p className="text-gray-300">{name} {lastname}</p>
      </div>

      <div>
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
          <Phone className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 font-semibold">{t("phoneLabel")}</span>
        </div>
        <p className="text-gray-300">{phoneNumber}</p>
      </div>

      <div>
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
          <Mail className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 font-semibold">{t("emailLabel")}</span>
        </div>
        <p className="text-gray-300">{email}</p>
      </div>


    </div>
  );
};

export default ContactInfo;
