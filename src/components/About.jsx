import React from 'react';
import SectionTitle from './SectionTitle';
import SideNav from './SideNav';
import '../assets/css/about-me.css';
import huLogo from '../assets/images/hu.png';
import orangeLogo from '../assets/images/orange logo.jpg';

const About = () => {
  return (
    <main className="container">
      <SectionTitle title="ABOUT ME" />
      <div className="inside">
        <div className="inside2">
          <h3><i className="fas fa-graduation-cap"></i> Education</h3>
          <p>
            <strong>The Hashemite University</strong>{' '}
            <span>
              <img
                src={huLogo}
                className="hu-img"
                alt="Hashemite University logo"
                width="35"
                height="35"
              />
            </span>
          </p>
          <p>
            Bachelor of Business Information Technology <br />
            <span className="uiu">Oct 2020 — Graduation Aug/2024</span>
          </p>
        </div>

        <div className="inside3">
          <h3><i className="fas fa-briefcase"></i> Experience</h3>
          <p>
            <strong>Trainee, Orange</strong>{' '}
            <span>
              <img
                src={orangeLogo}
                className="Orange-img"
                alt="Orange logo"
                width="35"
                height="35"
              />
            </span>
          </p>
          <p>
            Completed a web development training program at Orange <br />
            <span className="uiu">(Jul 2024 – Sep 2024)</span>, gaining hands-on
            experience in building responsive websites using HTML, CSS, and
            JavaScript, with a focus on UI/UX design and debugging.
          </p>
        </div>
      </div>
      <SideNav />
    </main>
  );
};

export default About;
