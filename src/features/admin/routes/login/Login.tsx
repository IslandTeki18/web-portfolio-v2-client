import * as React from "react";
import { useEffect } from "react";
import { LoginForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "~src/stores";

export const Login = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <>
      <section className="flex h-screen flex-col">
        <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
          <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
            <LoginForm />
          </div>
          <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
            <img
              loading="lazy"
              width={1664}
              height={1866}
              src="https://images.unsplash.com/photo-1696963937855-ede32b298348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3451&q=80"
              alt="cover image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
