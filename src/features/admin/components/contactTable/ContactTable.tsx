import * as React from "react";

type ContactTableProps = {};

export const ContactTable = (props: ContactTableProps) => {
  const contacts = [
    {
      name: "John Doe",
      phone: "801-555-5555",
      email: "johndoe@test.ccom",
      message: "I am a test message.",
      haveRead: true
    },
    {
      name: "Jane Smith",
      phone: "123-456-7890",
      email: "janesmith@example.com",
      message: "Hello, I have a question.",
      haveRead: false
    },
    {
      name: "Bob Johnson",
      phone: "555-123-9876",
      email: "bob@example.com",
      message: "Interested in your services.",
      haveRead: true
    },
    {
      name: "Alice Brown",
      phone: "987-654-3210",
      email: "alice@example.com",
      message: "Can you provide a quote?",
      haveRead: false
    },
    {
      name: "David Wilson",
      phone: "555-555-5555",
      email: "david@example.com",
      message: "Looking for a consultation.",
      haveRead: true
    },
    {
      name: "Sarah Davis",
      phone: "888-888-8888",
      email: "sarah@example.com",
      message: "Need assistance with a project.",
      haveRead: true
    },
  ];

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-300">
            Contacts
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all of the contacts
          </p>
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
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Have Read
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {contacts.map((contact) => (
                    <tr key={contact.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {contact.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {contact.email}
                      </td>
                      <td className={`${contact.haveRead ? "text-success-700"  : "text-danger-700"}`}>
                        {contact.haveRead ? "True" : "False"}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {contact.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
