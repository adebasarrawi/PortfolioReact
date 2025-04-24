import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socm = () => {
  return (
    <div className="scm">
      <a href="mailto:adebasarrawi@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon="fa-at" />
      </a>
      <a href="https://github.com/adebasarrawi" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="https://www.linkedin.com/in/adebasarrawi" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="https://www.facebook.com/adebasarrawi02" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
      <a href="https://www.instagram.com/adebasarrawi_?igsh=MTAydDhqanFmZnB5MQ==" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
    </div>
  );
};

export default Socm;