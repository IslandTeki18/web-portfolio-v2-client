import * as React from "react";
import { SideNav, ProjectTable, ContactTable } from "../../components";
import { setCurrentNavigation } from "../../utils";


export const Dashboard = () => {
  return (
    <div className="h-full">
      <SideNav navItems={setCurrentNavigation(0)}/>
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-screen w-full flex flex-col">
              <div className="flex flex-col gap-6">
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
