import React from "react";
import "./Team.css";

const Team = ({ formData, setFormData, setPage }) => {
  return (
    <div>
      <div className="TeamCard_container">
        <div
          className="TeamCard"
          onClick={() => setFormData({ ...formData, usage: "1" })}
        >
          <div className="TeamCard_header">
            <img
              src="https://res.cloudinary.com/aniket-singh/image/upload/v1664780763/Images/user_sfb1z0.png"
              alt="solo"
            />
          </div>
          <div>For myself</div>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>
        <div
          className="TeamCard"
          onClick={() => setFormData({ ...formData, usage: "2" })}
        >
          <div className="TeamCard_header">
            <img
              src="https://res.cloudinary.com/aniket-singh/image/upload/v1664780716/Images/group_r2u9tw.png"
              alt="group"
            />
          </div>
          <div>With my team</div>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
      <button className="Team_btn" onClick={() => setPage((prev) => prev + 1)}>
        Create Workspace
      </button>
    </div>
  );
};

export default Team;
