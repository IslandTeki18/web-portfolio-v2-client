import * as React from "react";
import "animate.css";
import { AppRoutes } from "./routes/index";
import { AuthProvider } from "./providers";

export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
