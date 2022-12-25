import { Avatar } from '@mui/material';
import React from 'react';
import KarineImage from '../assets/images/Karine.jpg';
import HugoImage from '../assets/images/Hugo.jpeg';
import MatheusImage from '../assets/images/Matheus.jpeg';
import { LinkedIn, GitHub } from '@mui/icons-material';

const About = () => {
  return (
    <div className="bloco-about">
      <div className="about">
        <Avatar
          sx={{ width: 150, height: 150, objectPosition: 'center' }}
          style={{ objectPosition: 'center' }}
          alt="Imagem Karine"
          src={KarineImage}
        />
        <h1>Karine Haubert Cagliari</h1>
        <div className="link-group">
          <a
            href="https://www.linkedin.com/in/karine-haubert/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/KarineHaubert"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="about">
        <Avatar
          sx={{ width: 150, height: 150, objectPosition: 'top' }}
          style={{ objectPosition: 'top' }}
          alt="Imagem Hugo"
          src={HugoImage}
        />
        <h1>Hugo Gambatto</h1>
        <div className="link-group">
          <a
            href="https://www.linkedin.com/in/hugo-gambatto-605177185/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/HugoGambatto"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="about">
        <Avatar
          sx={{ width: 150, height: 150, objectPosition: 'top' }}
          style={{ objectPosition: 'top' }}
          alt="Imagem Matheus"
          src={MatheusImage}
        />
        <h1>Matheus Maschio</h1>
        <div className="link-group">
          <a
            href="https://www.linkedin.com/in/matheusmaschio"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.linkedin.com/in/matheusmaschio"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
