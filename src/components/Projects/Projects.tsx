"use client"

import { useState } from "react"
import { projects, categories, titleWhiteProjects, titleOrangeProjects, paragraphProjects } from "@/Data/data"
import { Button } from "@/components/ui/button"
import ProjectCard from "./ProjectCard"
import CategoryFilter from "./CategoryFilter"
import SectionHeader from "../SectionHeader"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section className="py-20 px-6 bg-gray-900 text-white" id="projects">
      <div className="max-w-7xl mx-auto">
       
        <SectionHeader titleWhite={titleWhiteProjects} titleOrange={titleOrangeProjects} paragraph={paragraphProjects} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
            >
              {showAll ? "Show Less" : `Show All Projects (${filteredProjects.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
