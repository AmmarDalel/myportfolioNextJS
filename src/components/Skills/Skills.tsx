import { Card, CardContent } from "@/components/ui/card"
import { skills, titleOrangeSkills, titleWhiteSkills } from "@/Data/data"
import SectionHeader from "../SectionHeader"


export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeader titleWhite={titleWhiteSkills} titleOrange={titleOrangeSkills} paragraph=""/>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>

                <h3 className="text-xl font-semibold mb-6 text-white">{skill.name}</h3>

                <div className="relative">
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
