import * as React from "react";

type FormProps = {
  className: string;
  onSubmit: () => void;
  children: React.ReactElement;
};

const Form = (props: FormProps) => {
  return (
    <form {...props} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

Form.defaultProps = {
  className: "",
};
