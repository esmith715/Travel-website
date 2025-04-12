import React, { useEffect, useState } from 'react';
import Title from '../../Componets/Title/Title';
import Navbar from '../../Componets/NavBar/Navbar';
import './FAQ.css';
import axios from 'axios';

function FAQ() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [responseInputs, setResponseInputs] = useState({}); // Track responses for each question

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const unansweredResponse = await axios.get('http://localhost:5000/api/questions'); // Fetch unanswered questions
      const answeredResponse = await axios.get('http://localhost:5000/api/answered-questions'); // Fetch answered questions
      setUnansweredQuestions(unansweredResponse.data.submissions || []);
      setAnsweredQuestions(answeredResponse.data.submissions || []);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/submit-form', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      fetchQuestions(); // Refresh questions after submission
    } catch (error) {
      setResponseMessage('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResponseChange = (id, value) => {
    setResponseInputs({ ...responseInputs, [id]: value });
  };

  const handleResponseSubmit = async (id) => {
    const response = responseInputs[id];
    if (!response) return;

    try {
      await axios.post('http://localhost:5000/api/respond', { id, response });
      fetchQuestions(); // Refresh questions after adding a response
    } catch (error) {
      console.error('Failed to save response:', error);
    }
  };

  return (
    <div className="container_box">
      <Navbar />
      <Title subtitle="Have a question" title="Submit a ticket" />
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Question"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {responseMessage && <span>{responseMessage}</span>}
      </div>

      <div className="questions-section">
        <h2>Unanswered Questions</h2>
        {unansweredQuestions.map((question) => (
          <div key={question.id} className="question-item">
            <p><strong>Question:</strong> {question.message}</p>
            <div>
              <textarea
                placeholder="Write a response..."
                rows="3"
                value={responseInputs[question.id] || ''}
                onChange={(e) => handleResponseChange(question.id, e.target.value)}
              ></textarea>
              <button onClick={() => handleResponseSubmit(question.id)}>Submit</button>
            </div>
          </div>
        ))}

        <h2>Answered Questions</h2>
        {answeredQuestions.map((question) => (
          <div key={question.id} className="question-item">
            <p><strong>Question:</strong> {question.message}</p>
            <p><strong>Response:</strong> {question.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
