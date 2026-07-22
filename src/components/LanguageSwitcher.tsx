"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  fr: "FR",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-700 p-1">
      {routing.locales.map((availableLocale) => (
        <button
          key={availableLocale}
          onClick={() => router.replace(pathname, { locale: availableLocale })}
          aria-current={availableLocale === locale}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
            availableLocale === locale
              ? "bg-orange-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {localeLabels[availableLocale]}
        </button>
      ))}
    </div>
  );
}
