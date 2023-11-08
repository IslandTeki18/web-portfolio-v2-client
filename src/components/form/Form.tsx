import * as React from "react";

type FormProps = {
  onSubmit?: any;
  children: any;
};

export const Form = (props: FormProps) => {
  return (
    <form {...props} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};
