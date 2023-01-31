import React, { useState } from "react";
import { Article } from "./components/Article";
import "./scss/styles.scss";

export default function App() {
  const [submitAfore, setSubmitAfore] = useState("");

  return (
    <Article
      articleClass={"main-content"}
      afore={submitAfore}
      submitAfore={setSubmitAfore}
    />
  );
}
