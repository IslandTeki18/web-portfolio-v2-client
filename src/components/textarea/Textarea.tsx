import * as React from "react";

type Props = {
  value: any;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
  name?: string;
};

export const Textarea = (props: Props) => {
  return (
    <textarea
      className="text-white border border-white bg-dark py-2 px-4"
      value={props.value}
      onChange={props.onChange}
      rows={props.rows || 4}
      cols={props.cols || 50}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};
