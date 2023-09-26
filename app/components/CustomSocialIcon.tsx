import React from 'react';
import { SocialIcon, SocialIconProps } from 'react-social-icons';

const CustomSocialIcon = (props: SocialIconProps) => {
  return (
    <span className="rounded-full border-dark-white border hover:bg-light-black">
      <SocialIcon
        bgColor="transparent"
        target='_blank'
        {...props}
      />
    </span>
  );
};

export { CustomSocialIcon };
