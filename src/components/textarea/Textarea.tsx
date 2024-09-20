import * as React from "react";

type Props = {
  value: any;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
  name?: string;
  id?: string;
  hasLabel?: boolean;
  label?: string;
};

export const Textarea = (props: Props) => {
  return (
    <>
      {props.hasLabel && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium leading-6 text-white"
        >
          {props.label}
        </label>
      )}
      <textarea
        id={props.id}
        className={` border text-white border-white bg-dark py-2 px-4`}
        value={props.value}
        onChange={props.onChange}
        rows={props.rows || 4}
        cols={props.cols}
        placeholder={props.placeholder}
        name={props.name}
      />
    </>
  );
};
