import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
// import style from './social.module.css';
import twitter_dark from '../../public/assets/twitter_dark.svg';
import twitter_lite from '../../public/assets/twitter_lite.svg';
import gmail_dark from '../../public/assets/gmail_dark.svg';
import gmail_lite from '../../public/assets/gmail_lite.svg';
import figma_dark from '../../public/assets/figma_dark.svg';
import figma_lite from '../../public/assets/figma_lite.svg';
import linkedin_dark from '../../public/assets/linkedin_dark.svg';
import linkedin_lite from '../../public/assets/linkedin_lite.svg';
import github_dark from '../../public/assets/github_dark.svg';
import github_lite from '../../public/assets/github_lite.svg';

const dark = {"twitter": twitter_dark, "gmail": gmail_dark, "figma": figma_dark, "linkedin": linkedin_dark, "github": github_dark};
const lite = {"twitter": twitter_lite, "gmail": gmail_lite, "figma": figma_lite, "linkedin": linkedin_lite, "github": github_lite};

const Social = ({ item, color, ...props }) => {
  const imgsrc = color == "dark" ? dark[item] : lite[item];
  console.log("grabbing social: ", item);
  return (
    <a type="link" {...props}>
      <Image src={imgsrc}/>
    </a>
  );
};

Social.propTypes = {
  item: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

Social.defaultProps = {
  item: "gmail",
  color: "dark",
  target: "_blank",
  href: "#"
};

export default Social;