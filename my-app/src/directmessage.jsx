import React from 'react';
import './directmessage.css'; // Import the CSS file

const DMs = () => {
  return (
    <div className="dm-container">
      <div className="background-rectangle">
        <div className='Rectangle3'></div>
        <div className='Rectangle4'></div>
        <div className='Rectangle5'></div>
      </div>
      <div className="header"></div>
      <div className="header-text">CultureConnect</div>
    
      <div className="circle"></div>
      <div className="circle2"></div>

      <img className="icon-comment" src="src/ic_fluent_comment_24_regular.png" alt="Comment" />
      <img className="icon-organization" src="src/ic_fluent_organization_24_regular.png" alt="Organization" />
      <img className="icon-custom" src="src/image1.png" alt="Custom" />
      <img className="icon-person" src="src/ic_fluent_person_24_regular.png" alt="Person" />
      <img className="icon-community" src="src/ic_fluent_people_24_regular.png" alt="People Community" />
      
      <div className="main-content">
        <div className="footer"></div>
        {/* Changed from a div to an input element to make it a usable textbox */}
        <input type="text" className="footer-text" placeholder="Type Here" />
        <div className="main-background"></div>
      </div>
      
      <div className="sidebar">
        <div className="sidebar-background"></div>
      </div>
    </div>
  );
}

export default DMs;