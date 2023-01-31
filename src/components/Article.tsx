import React from "react";
import { ArticleProps } from "../props/interfaces";
import { ImgSection } from "./ImgSection";
import { InputSection } from "./InputSection";
import { Quill } from "./Quill";
import { ToggleSection } from "./ToggleSection";
import { ButtonsSection } from "./ButtonsSection";

export const Article = (props: ArticleProps) => {
  let count = 0;

  return (
    <article className={`${props.articleClass}__form-keeper`}>
      <form
        className={`${props.articleClass}__form`}
        action={"/"}
        method={"POST"}
      >
        <div className={"corrector"}>
          <ImgSection
            sectionClass={"news-preview"}
            title={"Изображение для превью новости"}
            inputId={`preview-img`}
            limitsClass={"preview-limits"}
            counter={++count}
            afore={props.afore}
          />
          <ImgSection
            sectionClass={"news-main"}
            title={"Основное изображение"}
            inputId={`main-img`}
            limitsClass={"main-limits"}
            counter={++count}
            afore={props.afore}
          />
          <InputSection
            localClass={"news-header-section"}
            labelClass={"section-header"}
            type={"textbox"}
            title={"Заголовок"}
            inputId={"news-header"}
            placeholder={"Введите заголовок"}
            max={75}
          />
          <InputSection
            localClass={"news-short-description-section"}
            labelClass={"section-header"}
            type={"textarea"}
            title={"Короткое описание"}
            inputId={"news-short-description"}
            placeholder={"Введите короткое описание"}
            max={100}
          />
          <Quill
            quillTheme={"snow"}
            quillID={"quill-area"}
            quillLabel={"Основной текст"}
            quillPlaceholder={"Введите основной текст"}
            quillMax={20000}
          />
          <ToggleSection
            sectionClass={"toggle-section"}
            checkID={"toggle"}
            title={"Главная новость"}
          />
        </div>
        <ButtonsSection submitAfore={props.submitAfore} />
      </form>
    </article>
  );
};
