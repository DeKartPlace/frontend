import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className="recent">
      <div className="text">
        <h2>About Us</h2>
        <div className="team-member">
          <div className="category">
            <span>Backend Developer</span>
            <i className="fas fa-user"></i>
          </div>
          <p>Karthik Kuppili</p>
          <p>Email: <a href="mailto:karthikkuppili.offl@gmail.com">karthikkuppili.offl@gmail.com</a></p>
          <p>Phone: 9100388576</p>
        </div>

        <div className="team-member">
          <div className="category">
            <span>Web3 Developer</span>
            <i className="fas fa-user"></i>
          </div>
          <p>Puneeth Narra</p>
          <p>Email: <a href="mailto:narrapuneeth44@gmail.com">narrapuneeth44@gmail.com</a></p>
          <p>Phone: 9652585354</p>
        </div>

        <div className="team-member">
          <div className="category">
            <span>Frontend Developer</span>
            <i className="fas fa-user"></i>
          </div>
          <p>Thirush Reddy Chada</p>
          <p>Email: <a href="mailto:thirushreddychada@gmail.com">thirushreddychada@gmail.com</a></p>
          <p>Phone: 7815962448</p>
        </div>

        <div className="button">
          <button className="btn2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
