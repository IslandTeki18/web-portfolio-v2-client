import * as React from "react";
import { SectionWrapper, WheelSpinner } from "~src/components";
import { ProjectImageCard } from "../projectImageCard";
import { useFetch } from "~src/hooks";

// @ts-ignore
import noProjectImage from "~src/features/projects/assets/noImage2.png?as=webp";

export const ProjectListSection = () => {
  const { data: projects, loading, error } = useFetch("projects");

  function renderProjects() {

    if (!Array.isArray(projects)) return;
    return projects.map((project) => (
      <ProjectImageCard
        key={project._id}
        id={project._id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.applicationType}
        projectImage={project.images[0] || noProjectImage}
        createdAt={project.createdAt}
      />
    ));
  }

  if (loading) {
    return (
      <div className="h-screen w-full bg-base-100">
        <div className="flex justify-center pt-8">
          <WheelSpinner size="lg" color="blue" />
        </div>
      </div>
    );
  }

   if (error) {
     return (
       <div className="h-screen w-full bg-base-100">
         <div className="flex justify-center pt-8">
           <p>Error: {error.message}</p>
         </div>
       </div>
     );
   }

  return (
    <SectionWrapper title="My Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
