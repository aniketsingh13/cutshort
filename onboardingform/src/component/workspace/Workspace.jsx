import React from "react";
import "./Workspace.css";

export const Workspace = ({ formData, setFormData, setPage }) => {
  return (
    <div className="workspace_container">
      <form onSubmit={() => setPage((prev) => prev + 1)}>
        <div className="workspace_name">
          <label>Workspace Name</label>
          <input
            type="text"
            placeholder="Eden"
            value={formData.workspaceName}
            onChange={(e) =>
              setFormData({ ...formData, workspaceName: e.target.value })
            }
            required
          />
        </div>
        <div className="workspace_url">
          <label>
            Workspace URL<span>(optional)</span>
          </label>
          <div>
            <div>www.eden.com/</div>
            <input
              type="text"
              placeholder="Example"
              value={formData.workspaceUrl}
              onChange={(e) =>
                setFormData({ ...formData, workspaceUrl: e.target.value })
              }
              required
            />
          </div>
        </div>
        <button className="workspace_btn" type="submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};
