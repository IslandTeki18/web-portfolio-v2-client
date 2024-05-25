import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "~src/stores";
import { Button } from "~src/components";
import { useSetRecoilState } from "recoil";
import { API_URL } from "~src/config";
import { loginUser } from "../../api/loginUser";

export const LoginForm = () => {
  const navigate = useNavigate();
  const setUserStateObj = useSetRecoilState(userState);
  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function onSumitHandler(e: React.FormEvent) {
    e.preventDefault();
    loginUser(loginCreds.username, loginCreds.password).then((res) => {
      setUserStateObj({
        username: loginCreds.username,
        role: "admin",
        token: res.data.token,
      });
      localStorage.setItem("userInfo", JSON.stringify({
        username: loginCreds.username,
        role: "admin",
        token: res.data.token,
      }))
      navigate("/admin/dashboard", {
        replace: true,
      });
    }).catch((error) => {
      if (error.response) {
        const errorMessage = error.response.data.message;
        setMessage(errorMessage);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    });
  }
  return (
    <div
      id="login-form"
      className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"
    >
      <form
        onSubmit={onSumitHandler}
        className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"
      >
        <h1 className="text-lg md:text-xl md:mb-4 uppercase font-bold text-left">
          Admin Login
        </h1>
        {isError && (
          <div className="p-4 rounded-lg bg-danger-500 text-white">
            <span>{message}</span>
          </div>
        )}
        <div className="flex flex-col gap-1">
          <label htmlFor="usernameInput" className="md:text-lg">
            Username
          </label>
          <input
            type="text"
            value={loginCreds.username}
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            onChange={(e) =>
              setLoginCreds((prev) => {
                return {
                  ...prev,
                  username: e.target.value,
                };
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="passwordInput" className="md:text-lg">
            Password
          </label>
          <input
            type="password"
            value={loginCreds.password}
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
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
        <Button isDisabled={!loginCreds.password || !loginCreds.username} label="LOGIN" className="mt-4" variant="dark" type="submit" />
      </form>
    </div>
  );
};
