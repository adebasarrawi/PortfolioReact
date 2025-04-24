import React from 'react';
import PageLayout from '../components/PageLayout';
import '../assets/css/project.css';
import cameliaLogo from '../assets/images/camelia.webp';
import logo2 from '../assets/images/logo2.jpg';
import logo3 from '../assets/images/logo3.jpg';

const Projects = () => {
  return (
    <PageLayout title="PROJECT">
      <section>
        <div className="section2-div2">
          <div className="section2-div2-item">
            <img src={cameliaLogo} alt="camelia wesite logo" width="130" height="80" />
            <p className="section2-div2-item-p"><a href="https://github.com/adebasarrawi/Camelia">Camelia &nbsp;<i className="fa-solid fa-link"></i></a></p>
            <p>The "Camelia" website was built with HTML and CSS, featuring an elegant design and responsive for a visually appealing user experience.
            </p>
          </div>
          <div className="section2-div2-item">
            <img src={logo2} alt="Abstrac Website logo" width="200" height="150" />
            <p className="section2-div2-item-p"><a href="#"> Abstract &nbsp;<i className="fa-solid fa-link"></i></a></p>
            <p>"Abstract" is a responsive website built with HTML, CSS, JavaScript, and Bootstrap, featuring an interactive and seamless design.
            </p>
          </div>
          <div className="section2-div2-item">
            <img src={logo3} alt="Holidays website logo" width="200" height="150" />
            <p className="section2-div2-item-p"><a href="#">Holidays &nbsp;<i className="fa-solid fa-link"></i></a></p>
            <p>"Holidays" is a responsive website created with HTML, CSS, JavaScript, Bootstrap, and React, offering a dynamic and user-friendly experience.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;