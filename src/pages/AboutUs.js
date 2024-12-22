import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="recent">
      <div className="text">
        <h1>About Us</h1>
        <p>Meet the team behind this project:</p>
        <div className="category">
          <span>Backend Developer</span>
          <p><strong>Karthik Kuppili</strong> - <a href="mailto:karthikkuppili.offl@gmail.com">karthikkuppili.offl@gmail.com</a> | Phone: 9100388576</p>
        </div>
        <div className="category">
          <span>Web3 Developer</span>
          <p><strong>Puneeth Narra</strong> - <a href="mailto:narrapuneeth44@gmail.com">narrapuneeth44@gmail.com</a> | Phone: 9652585354</p>
        </div>
        <div className="category">
          <span>Frontend Developer</span>
          <p><strong>Thirush Reddy Chada</strong> - <a href="mailto:thirushreddychada@gmail.com">thirushreddychada@gmail.com</a> | Phone: 7815962448</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
