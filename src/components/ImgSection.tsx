import React, { useState } from "react";
import { ImgSectionProps } from "../props/interfaces";
import classNames from "classnames";
import { FileClick, ImgChanged } from "../js/Scripts";

export const ImgSection = (props: ImgSectionProps) => {
  const [imgPath, setImgPath] = useState("");
  const [afore, setAfore] = useState("afore");
  const args = [setImgPath, setAfore];
  const customBtnClasses = [
    "custom-btn",
    `custom-btn-${props.counter}`,
    props.afore || afore
  ];
  const classes = classNames(customBtnClasses);

  return (
    <section className={props.sectionClass}>
      <h3>{props.title}</h3>
      <input
        className={"load-img"}
        type={"file"}
        name={props.inputId}
        id={props.inputId}
        onChange={(e) => ImgChanged(e, ...args)}
      />
      <div className={classes} onClick={(e) => FileClick(e)}>
        {imgPath && (
          <img className={"current-img"} src={imgPath} alt={"preview"} />
        )}
      </div>
      <p className={props.limitsClass}>
        В формате JPG, JPEG, PNG весом до 1 Мбайт
      </p>
    </section>
  );
};
