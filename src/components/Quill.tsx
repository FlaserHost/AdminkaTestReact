import React, { useState } from "react";
import ReactQuill from "react-quill";
import { QuillProps } from "../props/interfaces";
import { modules, formats } from "../quill_settings/settings";
import "react-quill/dist/quill.snow.css";
import { quillCounter } from "../js/Scripts";

export const Quill = (props: QuillProps) => {
  const [curLen, setCurLen] = useState(0);

  return (
    <section className={"main-text-section"}>
      <label className={"main-text-label"} htmlFor={props.quillID}>
        <h3>{props.quillLabel}</h3>
      </label>
      <div className={"helper"}>
        <span className="letters-limit" id="quill-limit">
          {curLen}/{props.quillMax}
        </span>
        <ReactQuill
          theme={props.quillTheme}
          id={props.quillID}
          placeholder={props.quillPlaceholder}
          modules={modules}
          formats={formats}
          onKeyUp={() => quillCounter(setCurLen)}
        />
      </div>
    </section>
  );
};
