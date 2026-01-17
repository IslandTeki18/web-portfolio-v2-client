import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TerminalWindow, CommandPrompt } from "~src/components";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center bg-base-100 p-4">
      <TerminalWindow showChrome title="~/error" glowColor="green" className="max-w-2xl w-full">
        <div className="flex flex-col gap-4">
          <CommandPrompt status="error">
            <span className="text-error font-bold">bash: cd {window.location.pathname}</span>
          </CommandPrompt>
          <div className="pl-6 space-y-2">
            <p className="text-error">
              bash: cd: {window.location.pathname}: No such file or directory
            </p>
            <p className="text-base-content opacity-70">
              Error Code: <span className="text-error font-bold">404</span>
            </p>
          </div>

          <CommandPrompt status="ready">
            <span className="text-primary font-bold">ls -la ~/available-routes</span>
          </CommandPrompt>
          <div className="pl-6 space-y-1 text-info">
            <p><span className="text-secondary">→</span> /</p>
            <p><span className="text-secondary">→</span> /projects</p>
            <p><span className="text-secondary">→</span> /resume</p>
            <p><span className="text-secondary">→</span> /about</p>
          </div>

          <div className="mt-6 flex gap-2">
            <Button
              label="cd ~/"
              onClick={() => navigate("/")}
              variant="success"
            />
            <Button
              label="cd ~/projects"
              onClick={() => navigate("/projects")}
              variant="info"
            />
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};
