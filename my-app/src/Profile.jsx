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
            <img className="Image1" src="src/image2.png" alt="Placeholder" />
          </div>
        </div>
      </div>
      <div className="IconPerson">
        <div className="Ellipse2"></div>
        <img className="Image2" src="src/ic_fluent_person_24_regular.png" alt="Placeholder" />
      </div>
      <div className="Group7">
      <div className="Name">
      Name:
      <input
        type="text"
        id="username"
        name="username"
        placeholder=""
        className="custom-text-box" 
      />
        </div>
        <div className="College">
        College:
      <input
        type="text"
        id="username"
        name="username"
        placeholder=""
        className="custom-text-box" // Apply the CSS class to the input element
      />
        </div>
        <div className="Culture">Culture:
        <input
        type="text"
        id="username"
        name="username"
        placeholder=""
        className="custom-text-box" // Apply the CSS class to the input element
      />
        </div>
        <div className="BioInfo">Bio info:
        <input
        type="text"
        id="username"
        name="username"
        placeholder=""
        className="custom-text-box" // Apply the CSS class to the input element
      />
        </div>
        
      </div>
    </div>
  );
};

export default CustomProfile;
