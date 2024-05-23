import * as React from "react";
import { useState } from "react";
import { Button } from "~src/components";
import { IProjectDetails } from "~src/types";
import { Link } from "react-router-dom";
import { CreateProjectModal } from "../createProjectModal";
import { useRecoilValue } from "recoil";
import { projectListState } from "~src/stores";
import { formatDate } from "~src/utils";

export const ProjectTable = () => {
  const projects: IProjectDetails[] = useRecoilValue(projectListState);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-300">
            Projects
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all of the projects that are Live, Not Live, In Progress,
            or Under Construction.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button
            labelColor="light"
            label="Add Project"
            variant="success"
            type="button"
            onClick={() => {
              setOpenModal(true)
            }}
          />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Created Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Industry
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <Link
                              to={`/admin/project/${project._id}`}
                              className="font-medium text-gray-900"
                            >
                              {project.title}
                            </Link>
                            <div className="mt-1 text-gray-500">
                              {project.projectType}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {formatDate(
                            project.createdAt
                              ? project.createdAt
                              : "mm/dd/yyyy",
                            "en-US"
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {project.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {project.applicationType}
                      </td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-center text-sm font-medium">
                        <button
                          onClick={() => {
                            console.log("Edit Button");
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit{" "}
                          <span className="sr-only">, {project.title}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};
