import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
export default function Feedbackform() {
  
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    category: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/submit-feedback", feedbackData);

      console.log("Feedback submitted:", response.data);
      // Clear the form fields or display a success message
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedbackform">
      <h1>Feedback-form</h1>
      <TextField
        id="standard-basic"
        label="Enter Name"
        variant="standard"
        name="name"
        value={feedbackData.name}
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Enter Email"
        variant="standard"
        name="email"
        value={feedbackData.email}
        onChange={handleChange}
      />
      <label for="category">Feedback Category:</label>
      <select id="category" name="category" value={feedbackData.category} onChange={handleChange}>
        <option value="Product Features">Product Features</option>
        <option value="Product Pricing">Product Pricing</option>
        <option value="Product Usability">Product Usability</option>
        <option value="Other">Other (please specify)</option>
      </select>
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" required spellCheck value={feedbackData.comments} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
