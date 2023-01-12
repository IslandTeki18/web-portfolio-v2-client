import * as React from "react";

type Props = {};

export const ResumeHeader = (props: Props) => {
  return (
    <div className="border border-white p-6 flex flex-col gap-8 text-white">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold uppercase">resume</span>
        <button className="border border-white px-6 py-2">Download CSV</button>
      </div>
      <span className="text-base">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </span>
    </div>
  );
};
