import React from 'react';
import './Profile.css'; // make sure the CSS file name matches

const CustomProfile = () => {
  return (
    <div className="CustomProfile">
      <div className="Group8">
        <div className="Rectangle1"></div>
        <div className="Cultureconnect">CultureConnect</div>
        <div className="Group9">
          <div className="Group10">
            <div className="Ellipse1"></div>
            <img className="Image1" src="https://via.placeholder.com/54x54" alt="Placeholder" />
          </div>
        </div>
      </div>
      <div className="IconPerson">
        <div className="Ellipse1"></div>
        <div className="Vector"></div>
      </div>
      <div className="Group7">
        <div className="Name">Name:
        <input type="text" id="username" name="username" placeholder="" />
        </div>
        <div className="College">College:
        <input type="text" id="username" name="username" placeholder="" />
        </div>
        <div className="Culture">Culture:
        <input type="text" id="username" name="username" placeholder="" />
        </div>
        <div className="BioInfo">Bio info:
        <input type="text" id="username" name="username" placeholder="" />
        </div>
        
      </div>
    </div>
  );
};

export default CustomProfile;
