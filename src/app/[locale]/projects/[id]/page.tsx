import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/Data/data";
import ProjectDetail from "@/components/Projects/ProjectDetail";

type ProjectPageParams = { locale: string; id: string };

function getProjectById(id: string) {
  return projects.find((project) => project.id === Number(id));
}

export function generateStaticParams(): { id: string }[] {
  return projects.map((project) => ({ id: project.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectPageParams>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project not found | Dalel Ammar" };
  }

  const t = await getTranslations({
    locale,
    namespace: `Projects.items.${id}`,
  });

  return {
    title: `${project.title} | Dalel Ammar`,
    description: t("description"),
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<ProjectPageParams>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
