import React from "react";
import "./SubmitForm.css";

const SubmitForm = ({ formData }) => {
  return (
    <div className="submitForm">
      <img
        src="https://res.cloudinary.com/aniket-singh/image/upload/v1664780553/Images/check_illg4j.png"
        alt="submit"
      />
      <div>Congratulations, {formData.displayName}!</div>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <button onClick={() => console.log(formData)}>Launch Eden</button>
    </div>
  );
};

export default SubmitForm;
