import * as React from "react";
import { MainNavbar } from "~src/components";
import { LoginForm } from "../../components";

export const Login = () => {
  return (
    <>
      <MainNavbar />
      <section className="py-4">
        <div className="flex justify-center items-center h-screen sm:h-[90vh]">
          <LoginForm />
        </div>
      </section>
    </>
  );
};
