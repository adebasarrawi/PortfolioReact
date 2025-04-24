import React from 'react';
import '../assets/css/section-title.css'; 

const SectionTitle = ({ title }) => {
  return (
    <header className="section-title">
      <h1>{title}</h1>
    </header>
  );
};

export default SectionTitle;
