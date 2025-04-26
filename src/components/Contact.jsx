import React from 'react';
import '../cssfiles/contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-heading">Let's Connect</h2>
        <p><strong>Name:</strong> Nikhil Jaisinghani</p>
        <p>
          <strong>Email:</strong>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhiljaisinghani30@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nikhiljaisinghani30@gmail.com
          </a>
        </p>
        <p><strong>Phone:</strong> +91-8446560200</p>

        <div className="footer-icons">
          <a href="https://github.com/JaisinghaniNikhil" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> 
          </a>
          <a href="https://www.linkedin.com/in/nikhil-jaisinghani-980514240/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" /> 
          </a>
        </div>
        <p className="copyright">© 2025 Nikhil Jaisinghani</p>
      </div>
    </footer>
  );
}

export default Contact;
