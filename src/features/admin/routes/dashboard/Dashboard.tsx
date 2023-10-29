import * as React from "react";
import { SideNav } from "../../components";

export const Dashboard = () => {
  return (
    <div className="h-full">
      <SideNav />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </div>
  );
};
