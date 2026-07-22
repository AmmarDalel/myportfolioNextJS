"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import ProjectImageSlider from "./ProjectImageSlider"
import { Link } from "@/i18n/navigation"
import { Project } from "@/Data/data"


export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects")

  return (
    <Card
      className={`bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden ${
        project.featured ? "ring-2 ring-orange-500/20" : ""
      }`}
    >
      <Link href={`/projects/${project.id}`}>
        <ProjectImageSlider images={project.images} projectTitle={project.title} />
      </Link>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            {t(`categories.${project.category}`)}
          </Badge>
          {project.featured && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
              {t("featured")}
            </Badge>
          )}
        </div>

        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold mb-3 text-white hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {t(`items.${project.id}.description`)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              {t("moreTech", { count: project.technologies.length - 3 })}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {project.demoUrl && (
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
              onClick={() => window.open(project.demoUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              {t("demo")}
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-2"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
              {t("code")}
            </Button>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="group ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
          >
            {t("details")}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
