import * as React from "react";
import { useState } from "react";

type Props = {};

export const LoginForm = (props: Props) => {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  function onSumitHandler() {
    // Send user creds
  }
  return (
    <div id="login-form" className="w-auto">
      <form
        onSubmit={onSumitHandler}
        className="flex flex-col gap-4 bg-white px-4 py-6 rounded"
      >
        <h1 className="text-lg md:text-3xl md:mb-2 uppercase font-bold text-center">
          Admin Login
        </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="emailInput" className="md:text-xl">
            Email
          </label>
          <input
            type="text"
            value={loginCreds.email}
            className="md:text-xl text-white focus:ring-white bg-dark border border-dark py-2 pl-2"
            onChange={(e) =>
              setLoginCreds((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passwordInput" className="md:text-xl">
            Password
          </label>
          <input
            type="password"
            value={loginCreds.password}
            className="md:text-xl text-white focus:ring-white bg-dark border border-dark py-2 pl-2"
            onChange={(e) =>
              setLoginCreds((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
          />
        </div>
        <button className="bg-dark py-4 text-white text-lg tracking-wider hover:bg-gray-800">
          Login
        </button>
      </form>
    </div>
  );
};
