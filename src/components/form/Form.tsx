import * as React from "react";
import "./Form.scss";

type FormProps = {
  className: string;
  onSubmit: () => void;
  children: React.ReactElement;
};

const Form = (props: FormProps) => {
  return (
    <form className={`dkForm ${props.className}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

Form.defaultProps = {
  className: "",
};
