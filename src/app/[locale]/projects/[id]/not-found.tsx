import { Compass } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ProjectNotFound() {
  const t = await getTranslations("ProjectNotFound");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900 text-white">
      <Compass className="w-12 h-12 text-orange-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="text-gray-400 mb-8 max-w-md">{t("description")}</p>
      <Link
        href="/#projects"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors"
      >
        {t("backButton")}
      </Link>
    </section>
  );
}
