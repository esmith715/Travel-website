import React, { useState } from 'react';
import './Chatbot.css';
import faqData from '../../../backend/chatbot_data.json'; // Import the FAQ data

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fallbackResponses = [
    "I'm sorry, I don't have an answer for that. Can you try rephrasing?",
    "That's an interesting question! Let me look into it.",
    "I'm not sure about that, but feel free to ask something else!",
    "I don't have the answer right now, but I can help with other questions."
  ];

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

  const handleSend = () => {
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
        : fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)] // Random fallback response
    };

    // Add bot response
    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

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
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a question..."
            />
            <button onClick={handleSend}>Send</button> {/*send all questions asked by users to a json file. */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;