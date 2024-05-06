// Feedback.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feedback.css';
import { BASEURL } from '../../../url/BaseUrl';
import "./Feedback.css";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`${BASEURL}/fetchFeedback`);
        setFeedbackList(response.data.feedback);
        console.log(feedbackList);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="feedback-container">
      {Array.isArray(feedbackList) && feedbackList.map((feedback, index) => (
        <div key={index} className="feedback-card">
          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Feedback;
