import { setRequestLocale } from "next-intl/server";
import Main from "@/components/Main/Main";
import { BackgroundBeamsWithCollision } from "@/components/Main/BackgroundBeamsWithCollision";
import SkillsSection from "@/components/Skills/Skills";
import { Gallery } from "@/components/Gallery/Gallery";
import Projects from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BackgroundBeamsWithCollision className="min-h-screen">
        <Main />
      </BackgroundBeamsWithCollision>
      <Gallery />
      <SkillsSection />
      <Projects />
      <Footer />
    </>
  );
}
