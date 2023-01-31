import React, { useState } from "react";
import { EmptyCheck, IncreaseCounter } from "../js/Scripts";
import classNames from "classnames";
import { InputSectionProps } from "../props/interfaces";

export const InputSection = (props: InputSectionProps) => {
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  let classes = classNames("news-input", error);
  let inputItem;
  let spanId = "";

  if (props.type === "textbox") {
    inputItem = (
      <input
        className={classes}
        type={"text"}
        id={props.inputId}
        name={props.inputId}
        placeholder={props.placeholder}
        maxLength={props.max}
        onBlur={(e) => EmptyCheck(e, setError)}
        onInput={(e) => IncreaseCounter(e, setCount)}
      />
    );
  } else if (props.type === "textarea") {
    inputItem = (
      <textarea
        className={classes}
        id={props.inputId}
        name={props.inputId}
        placeholder={props.placeholder}
        maxLength={props.max}
        onBlur={(e) => EmptyCheck(e, setError)}
        onInput={(e) => IncreaseCounter(e, setCount)}
      ></textarea>
    );
  } else {
    inputItem = <p>Нет реализаций для такого типа</p>;
  }

  if (props.inputId === "inputId") {
    spanId = "quill-limit";
  }

  return (
    <section className={props.localClass}>
      <label className={props.labelClass} htmlFor={props.inputId}>
        {props.title}
      </label>
      <div className={"helper"}>
        <span
          className={"letters-limit"}
          id={spanId}
        >{`${count}/${props.max}`}</span>
        {inputItem}
      </div>
      {error && (
        <div className={"error-description"}>
          <span>{`Поле "${props.title}" обязательно для заполнения`}</span>
        </div>
      )}
    </section>
  );
};
