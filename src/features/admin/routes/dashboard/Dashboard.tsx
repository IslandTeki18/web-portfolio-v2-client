import * as React from "react";
import { SideNav, ProjectCard, TaskCard, ProjectTable, ContactTable } from "../../components";

export const Dashboard = () => {
  return (
    <div className="h-full">
      <SideNav />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-screen w-full flex flex-col">
              {/* Project & Task Cards */}
              <div className="flex flex-row gap-4">
                <ProjectCard />
                <TaskCard />
              </div>
              {/* Project & Contact Tables */}
              <div className="flex flex-col gap-6 py-10">
                <ProjectTable />
                <ContactTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
