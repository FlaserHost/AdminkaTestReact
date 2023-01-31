const inputs = document.querySelectorAll(".news-input");

export const FileClick = (e) => {
  e.target.closest("section").querySelector(".load-img").click();
};

export const ImgChanged = (e, path, afore) => {
  let [file] = e.target.files;
  const fileTypes = ["image/png", "image/jpg", "image/jpeg"];

  if (file) {
    if (file["size"] < 1000000) {
      if (fileTypes.includes(file["type"])) {
        path(URL.createObjectURL(file));
        afore("");
      } else {
        alert("Недопустимый формат файла");
      }
    } else {
      alert("Превышен допустимый размер файла");
    }
  }
};

export const EmptyCheck = (e, setError) => {
  if (e.target.value === "") {
    setError("empty-error");
  } else {
    setError("");
  }
};

export const IncreaseCounter = (e, setCount) => {
  let symbols = e.target.value.length;
  setCount(symbols);
};

export const quillCounter = (setCurLen) => {
  let textLength = document.querySelector(".ql-editor > p").textContent.length;
  setCurLen(textLength);
};

const imgValidate = (submitAfore) => {
  const imgPlace = document.getElementsByClassName("custom-btn");

  for (let i = 0; i < imgPlace.length; i++) {
    let childrenLength = imgPlace[i].querySelector("img") ? 1 : 0;

    if (childrenLength === 0) {
      //submitAfore("afore-error");
      imgPlace[i].classList.remove("afore");
      imgPlace[i].classList.add("error");
      imgPlace[i].classList.add("afore-error");
    }
  }
};

const submitValidate = (item, submitAfore) => {
  if (item.value === "") {
  }
};

export const validateAll = (e, submitAfore) => {
  e.preventDefault();

  imgValidate(submitAfore);
};
