import React, { useState } from "react";
import "../styles/Dashboard.css"; 
const Dashboard = () => {
  const [fileName, setFileName] = useState(""); 

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(`Selected file: ${file.name}`);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="form-title">
        <h1>Healthcare Registration</h1>
      </div>
      <form action="/submit" method="POST" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <select id="age" name="age" required>
            <option value="">Select your age</option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
              <option key={age} value={age}>
                {age} years
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="file">Medical Document</label>
          <div className="file-input">
            <input
              type="file"
              id="actual-file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <span>Click to Upload</span>
          </div>
          <div id="file-chosen">{fileName}</div>
        </div>

        <button type="submit" className="submit-btn">
          Submit Information
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
