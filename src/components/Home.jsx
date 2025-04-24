import React from 'react';
import MainHeader from './MainHeader';
// import Scom from './Scom';
import '../assets/css/style.css';
import profileImage from '../assets/images/cropped_image (1).png';

const Home = () => {
  return (
    <main className="container">
      <div className="back">
        <MainHeader />

        <section>
          <div className="section-div1-img">
            <img src={profileImage} alt="profile photo" width="400" height="400" />
          </div>

          <div className="section-div2">
            <h1 className="section-div2-item1"> Hello ! I'm <br />
              Adeba Al-Sarrawi
            </h1>
            <p className="section-div2-item2">
              Skilled in integrating front-end aesthetics with <br />
              back-end functionality for seamless user experiences
            </p>

            <div className="section-box">
              <a href="/cv.pdf" className="section-div2-box" download target="_blank" rel="noreferrer"> Download CV</a>
              {/* <Scom /> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;