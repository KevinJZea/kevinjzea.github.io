import React from 'react';
import { CustomSocialIcon } from './CustomSocialIcon';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <CustomSocialIcon
          title="LinkedIn"
          url="https://linkedin.com/in/kevinjzea"
        />
        <CustomSocialIcon
          title="GitHub"
          url="https://github.com/kevinjzea"
        />
        <CustomSocialIcon
          network="x"
          title="X"
          url="https://twitter.com/kevinjzea"
        />
        <CustomSocialIcon
          title="Instagram"
          url="https://instagram.com/kevinjzea"
        />
        <CustomSocialIcon
          title="YouTube"
          url="https://youtube.com/@kevinjzea"
        />
        <CustomSocialIcon
          title="Twitch"
          url="https://twitch.tv/kevinjzea"
        />
        <CustomSocialIcon url="https://platzi.com/p/kevinjzea" />
      </div>
    </footer>
  );
};

export { Footer };
