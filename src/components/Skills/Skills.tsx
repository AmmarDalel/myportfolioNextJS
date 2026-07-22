import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/Data/data"
import { getTranslations } from "next-intl/server"
import SectionHeader from "../SectionHeader"


export default async function SkillsSection() {
  const t = await getTranslations("Skills")

  return (
    <section className="py-20 px-6 bg-gray-900 text-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeader titleWhite={t("titleWhite")} titleOrange={t("titleOrange")} paragraph=""/>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.id}
              className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6  text-center">
                <div className="flex justify-center items-center text-6xl mb-4">{skill.icon}</div>

                <h3 className="text-xl font-semibold mb-6 text-white">{t(`items.${skill.id}`)}</h3>


              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
