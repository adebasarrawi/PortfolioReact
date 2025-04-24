import React from 'react';
import PageLayout from '../components/PageLayout';
import '../assets/css/skills.css';

const Skills = () => {
  return (
    <PageLayout title="SKILLS">
      <section className="skills-section">
        {/* Technical Skills Section */}
        <div className="technical-skills">
          <div className="skill">
            <i className="fa-brands fa-html5"></i>
            <div>
              <h3>HTML</h3>
              <p> &nbsp;Skilled in creating well-structured, semantic, and accessible web pages.</p>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3-alt"></i>
            <div>
              <h3>CSS</h3>
              <p> &nbsp;Proficient in designing responsive, visually appealing layouts with modern styles.</p>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3>JavaScript</h3>
              <p>&nbsp;Experienced in adding interactivity and creating dynamic functionalities.</p>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-node"></i>
            <div>
              <h3>Node.JS</h3>
              <p> &nbsp;Knowledgeable in building efficient back-end servers and RESTful APIs.</p>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-react"></i>
            <div>
              <h3>React</h3>
              <p> &nbsp;Capable of developing reusable components and dynamic, user-friendly interfaces.</p>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills">
          <h2 className="soft-skills-title">Soft Skills</h2>
          <div className="soft-skill">
            <i className="fa-solid fa-users"></i>
            <h3>Teamwork</h3>
          </div>
          <div className="soft-skill">
            <i className="fa-solid fa-comments"></i>
            <h3>Communication</h3>
          </div>
          <div className="soft-skill">
            <i className="fas fa-palette"></i>
            <h3>Creativity</h3>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;