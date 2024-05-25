import * as React from "react";
import { ProjectTable, ContactTable } from "../../components";
import { Navbar } from "../../components/navBar";


export const Dashboard = () => {
  return (
    <div className="h-full">
        <Navbar />
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
  );
};
