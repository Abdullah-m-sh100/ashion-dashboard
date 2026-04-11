// NotFound.jsx
import React from 'react';
import './style.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
      
        <div className="error-illustration">
          <svg
            className="floating-svg"
            width="180"
            height="180"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="85" stroke="#E0E0E0" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            <circle cx="100" cy="100" r="70" fill="#F5F5F5" />
            <path
              d="M80 70 L120 70 M80 130 L120 130 M70 90 L70 110 M130 90 L130 110"
              stroke="#D32F2F"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M100 50 L100 60 M100 140 L100 150 M50 100 L60 100 M140 100 L150 100"
              stroke="#80DEEA"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
            <rect x="85" y="95" width="30" height="10" rx="5" fill="#D32F2F" opacity="0.9" />
            <circle cx="100" cy="100" r="4" fill="#000000" />
            <path
              d="M90 120 C90 125, 110 125, 110 120"
              stroke="#757575"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

      
        <h1 className="glitch-text" data-text="404">
          404
        </h1>

      
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>

      
        <button className="btn-primary" onClick={() => window.location.href = '/'}>
          Go Back Dashboard
        </button>

      
        <a href="/contact" className="secondary-link">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default NotFound;