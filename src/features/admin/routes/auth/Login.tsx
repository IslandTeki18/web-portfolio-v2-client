import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "~src/components";
import { useSignIn } from "../../hooks";
import { useAuthContext } from "~src/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { error, isLoading, signIn } = useSignIn();
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/admin/projects");
    }
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn(loginCred.username, loginCred.password);
  }

  function isSubmitDisabled() {
    return loginCred.username === "" || loginCred.password === "";
  }

  return (
    <div className="h-screen w-full bg-gray-1000">
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold uppercase text-center">
            Admin Login
          </h2>
          <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username..."
              value={loginCred.username}
              onChange={(e) =>
                setLoginCred({ ...loginCred, username: e.target.value })
              }
              hasLabel
              label="Username"
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password..."
              value={loginCred.password}
              onChange={(e) =>
                setLoginCred({ ...loginCred, password: e.target.value })
              }
              hasLabel
              label="Password"
            />

            <Button
              variant="dark"
              label={isLoading ? "Loading..." : "Login"}
              labelColor="light"
              type="submit"
              isDisabled={isSubmitDisabled()}
            />
          </form>
          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 text-sm text-center rounded-md">
              {error}
            </div>
          )}
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
