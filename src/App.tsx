import * as React from "react";
import { RecoilRoot } from "recoil";
import "animate.css";
import { AppRoutes } from "./routes/index";

export function App() {
  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
}
