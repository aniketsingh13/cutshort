import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [page, setPage] = useState(0);

  const formTitles = [
    {
      main: "Welcome! First things First...",
      sub: "You can always change them later.",
    },
    {
      main: "Let's set up a home for all your work",
      sub: "You can always create another workspace later",
    },
    {
      main: "How are you planning to use Eden?",
      sub: "We'll streamline your setup experience accordingly.",
    },
    { },
  ];

  return (
    <div className="form_container">
      <div className="header">
        <img
          src="https://res.cloudinary.com/aniket-singh/image/upload/v1664780523/Images/logo1_qykdvg.svg"
          alt="heading"
          className="header_img"
        />
        <h3 className="header_text">Eden</h3>
      </div>
      <div className="progressbar">
        <div></div>
      </div>
      <div className="formCard">
        <div>
        <div className="formCard_headerMain">{formTitles[page].main}</div>
        <div className="formCard_headerSub">{formTitles[page].sub}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
