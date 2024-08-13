import * as React from "react";

type PageWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className={`${props.className || ""} px-4 py-6 sm:px-6 lg:px-8`}>
      {props.children}
    </div>
  );
};
