import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import axios from 'axios';
import faqData from '../../../backend/chatbot_data.json'; // Import the FAQ data

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // Reference for the chat messages container

  const fallbackResponse = "I'm sorry, I don't have an answer to that. Please try submitting a ticket on our FAQ page: <a href='/faq' target='_blank' class='chatbot-link'>FAQ Page</a>";

  const exampleQuestions = [
    "What are the top destinations?",
    "How do I book a trip?",
    "What is the best time to visit Santorini?",
    "What activities can I do at Machu Picchu?",
    "How tall is the Tokyo Tower?"
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);

    // Add a welcome message when the chatbot is opened
    if (!isOpen) {
      setMessages([
        {
          sender: 'bot',
          text: "Hi! I'm your Travel Assistant. You can ask me questions like:"
        },
        ...exampleQuestions.map(question => ({
          sender: 'bot',
          text: `- ${question}`
        }))
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
  
    // Add user message
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
  
    // Find a matching answer
    const match = faqData.find(faq => faq.question.toLowerCase().includes(input.toLowerCase()));
    const botMessage = {
      sender: 'bot',
      text: match
        ? match.answer
        : fallbackResponse // Use the new fallback response
    };
  
    // Add bot response
    setMessages(prev => [...prev, botMessage]);
  
    // If no match, send the question to the backend
    if (!match) {
      try {
        await axios.post('http://localhost:5000/api/submit-form', {
          name: 'Chatbot User',
          email: 'N/A',
          phone: 'N/A',
          message: input,
          source: 'chatbot' // Distinguish chatbot questions
        });
      } catch (error) {
        console.error('Failed to send unanswered chatbot question:', error);
      }
    }
  
    setInput('');
  };

  // Scroll to the bottom of the chat messages when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className={`chatbot-button ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
        💬
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Travel Assistant</h3>
            <button onClick={toggleChatbot}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender}`}
                {...(msg.sender === 'bot'
                  ? { dangerouslySetInnerHTML: { __html: msg.text } }
                  : { children: msg.text })}
              />
            ))}
            <div ref={messagesEndRef} /> {/* Reference to the bottom of the messages */}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;