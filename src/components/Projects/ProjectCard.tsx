import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import ProjectImageSlider from "./ProjectImageSlider"
import { Project } from "@/Data/data"


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={`bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden ${
        project.featured ? "ring-2 ring-orange-500/20" : ""
      }`}
    >
      <ProjectImageSlider images={project.images} projectTitle={project.title} />

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              +{project.technologies.length - 3} more
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
              Demo
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
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
