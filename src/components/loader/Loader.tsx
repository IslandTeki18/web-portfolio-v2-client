import * as React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center">
      <div
        className="animate-spin block mx-auto w-5 h-5"
        style={{ width: "100px", height: "100px" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
