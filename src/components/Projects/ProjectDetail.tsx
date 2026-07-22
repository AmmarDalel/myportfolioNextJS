import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectGallery from "./ProjectGallery";
import { Link } from "@/i18n/navigation";
import { Project } from "@/Data/data";

export default async function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}) {
  const t = await getTranslations("ProjectDetail");
  const tProjects = await getTranslations("Projects");
  const tItem = await getTranslations(`Projects.items.${project.id}`);

  const paragraphs = tItem("longDescription")
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="py-16 px-6 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToProjects")}
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            {tProjects(`categories.${project.category}`)}
          </Badge>
          {project.featured && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
              {tProjects("featured")}
            </Badge>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
          {tItem("description")}
        </p>

        <ProjectGallery images={project.images} title={project.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold mb-2">{t("overview")}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                {t("technologies")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.demoUrl || project.githubUrl) && (
              <div className="flex flex-col gap-3">
                {project.demoUrl && (
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t("viewLiveDemo")}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white w-full"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      {t("viewSourceCode")}
                    </a>
                  </Button>
                )}
              </div>
            )}
          </aside>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-16 pt-8 border-t border-gray-800">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors"
          >
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> {t("previous")}
            </span>
            <span className="text-white group-hover:text-orange-500 transition-colors font-medium truncate">
              {prevProject.title}
            </span>
          </Link>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors text-right"
          >
            <span className="text-xs text-gray-500 flex items-center justify-end gap-1">
              {t("next")} <ArrowLeft className="w-3 h-3 rotate-180" />
            </span>
            <span className="text-white group-hover:text-orange-500 transition-colors font-medium truncate">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
