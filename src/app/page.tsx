import Main from "@/components/Main/Main";
import { BackgroundBeamsWithCollision } from "@/components/Main/BackgroundBeamsWithCollision";
import SkillsSection from "@/components/Skills/Skills";
import { Gallery } from "@/components/Gallery/Gallery";
import  Projects  from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
  <>
    <BackgroundBeamsWithCollision  className="min-h-screen">
        <Main /> 
    </BackgroundBeamsWithCollision>
    <Gallery/>
    <SkillsSection/>
    <Projects/>
    <Footer/>
 
  </>
  );
}
