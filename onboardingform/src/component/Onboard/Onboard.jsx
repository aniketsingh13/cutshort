import React from "react";
import "./Onboard.css";

const Onboard = ({ formData, setFormData, setPage }) => {
  return (
    <form onSubmit={() => setPage((prev) => prev + 1)}>
      <div className="onBoardFullName">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Steve Jobs"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
          }}
          required
        />
      </div>
      <div className="onBoardDisplayName">
        <label>Display Name</label>
        <input
          type="text"
          placeholder="Steve"
          value={formData.displayName}
          onChange={(e) => {
            setFormData({ ...formData, displayName: e.target.value });
          }}
          required
        />
      </div>
      <button className="onBoard_btn" type="submit">
        Create Workspace
      </button>
    </form>
  );
};

export default Onboard;
