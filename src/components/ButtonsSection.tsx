import React from "react";
import { button_names } from "../data/button_names";
import { ButtonSectionProps } from "../props/interfaces";
import { validateAll } from "../js/Scripts";

export const ButtonsSection = ({ submitAfore }: ButtonSectionProps) => {
  return (
    <section className={"buttons"}>
      {button_names.map((item, index) => (
        <button
          className={"form-btn"}
          id={`form-btn-${index + 1}`}
          type={`submit`}
          key={index + 1}
          onClick={(e) => validateAll(e, submitAfore)}
        >
          {item}
        </button>
      ))}
    </section>
  );
};
