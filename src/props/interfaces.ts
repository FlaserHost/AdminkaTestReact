export interface ImgSectionProps {
  sectionClass: string;
  inputId: string;
  title: string;
  limitsClass: string;
  counter: number;
  afore: string;
}

export interface ArticleProps {
  articleClass: string;
  afore: string;
  submitAfore: () => string;
}

export interface InputSectionProps {
  localClass: string;
  labelClass: string;
  type: string;
  title: string;
  inputId: string;
  placeholder: string;
  max: number;
}

export interface QuillProps {
  quillID: string;
  quillPlaceholder: string;
  quillTheme: string;
  quillLabel: string;
  quillMax: number;
}

export interface ToggleProps {
  sectionClass: string;
  checkID: string;
  title: string;
}

export interface ButtonSectionProps {
  submitAfore: () => string;
}
