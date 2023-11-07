import * as React from "react";
import { useState } from "react";
import { SideNav } from "../../components";
import { setCurrentNavigation } from "../../utils";
import { Button } from "~src/components";

export const ProjectDetails = () => {
  const [project, setProject] = useState({
    id: "2",
    title: "Smart Home Automation",
    status: "In Progress",
    type: "IoT",
    createdAt: "Nov. 5, 2022",
    client: "Myself",
    industry: "Home Automation",
    designer: "Myself",
    year: "2022",
  });

  return (
    <div className="h-full">
      <SideNav navItems={setCurrentNavigation(1)} />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <span className="text-white text-3xl">{project.title}</span>
                <Button label="Go Back" variant="primary" />
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
