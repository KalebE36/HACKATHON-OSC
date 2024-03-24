import React from 'react';
import './homepage.css'; // This is the CSS file for the Homepage component

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="culture-connect">CultureConnect</h1>
      </header>
      <div className="content-wrapper">
        <main className="main-content">
          <section className="profile-section">
            <img className="profile-image" src="src/Dino.png" alt="Dino Luzzi" />
            <div className="profile-name">Dino Luzzi</div>
          </section>
          <div className="content-area">
            {/* Dynamic content will be injected here */}
          </div>
        </main>
        <aside className="sidebar">
          <div className="icon-group">
            {/* Icons will be placed here */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Homepage;
