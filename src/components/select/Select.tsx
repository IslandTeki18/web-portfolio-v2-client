import * as React from "react";
import { useState, useEffect } from "react";

type SelectProps = {
  items: any[];
  onSelection: (val: any) => void;
  value: string;
};

export const Select = (props: SelectProps) => {
  const [items, setItems] = useState<any[]>(props.items);
  const [selectedItem, setSelectedItem] = useState<string>(props.value);

  useEffect(() => {
    props.onSelection(selectedItem);
  }, [selectedItem]);

  function renderMenuItems() {
    return items.map((item) => (
      <option key={item.value} value={item.value}>
        {item.name}
      </option>
    ));
  }
  return (
    <div>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedItem(e.target.value)
        }
      >
        {renderMenuItems()}
      </select>
    </div>
  );
};
