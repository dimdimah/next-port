import React from "react";
interface Props {
  text: string;
  value: string;
  items: string;
}
export default function dropdown(props: Props) {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="m-1 w-52 btn">
        {props.text}
      </label>
      <ul
        tabIndex={0}
        className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
      >
        <li>
          <a>{props.value}</a>
          <a>{props.items}</a>
        </li>
      </ul>
    </div>
  );
}
