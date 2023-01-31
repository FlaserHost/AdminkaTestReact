import React from "react";
import { ToggleProps } from "../props/interfaces";

export const ToggleSection = (props: ToggleProps) => {
  return (
    <section className={props.sectionClass}>
      <label className={"title-label"} htmlFor={props.checkID}>
        <span>{props.title}</span>
        <input
          className={`${props.sectionClass}__toggle`}
          type={"checkbox"}
          id={props.checkID}
        />
        <label
          className={`${props.sectionClass}__toggle-label`}
          htmlFor={props.checkID}
        ></label>
      </label>
    </section>
  );
};
