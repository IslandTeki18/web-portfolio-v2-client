import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "~src/components";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-full bg-gray-1000">
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold uppercase text-center">
            Admin Login
          </h2>
          <form className="mt-4 flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username..."
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password..."
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Button
              variant="dark"
              onClick={() => console.log("Login")}
              label="Login"
              labelColor="light"
            />
          </form>
          <div className="text-center mt-4">
            <Link to="/" className="text-sm text-gray-900 hover:text-gray-600">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
