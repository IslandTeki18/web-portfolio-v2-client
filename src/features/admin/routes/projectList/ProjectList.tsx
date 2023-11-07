import * as React from "react";
import { setCurrentNavigation } from "../../utils";
import { SideNav, ProjectTable } from "../../components";

export const ProjectList = () => {
  return (
    <div className="h-full">
      <SideNav navItems={setCurrentNavigation(1)} />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-screen w-full flex flex-col">
              <div className="flex flex-col gap-6">
                <ProjectTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
