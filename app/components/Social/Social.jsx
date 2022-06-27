import React from 'react';
import PropTypes from 'prop-types';
// import style from './social.module.css';
const twitter_dark = '/assets/twitter_dark.svg';
const twitter_lite = '/assets/twitter_lite.svg';
const gmail_dark = '/assets/gmail_dark.svg';
const gmail_lite = '/assets/gmail_lite.svg';
const figma_dark = '/assets/figma_dark.svg';
const figma_lite = '/assets/figma_lite.svg';
const linkedin_dark = '/assets/linkedin_dark.svg';
const linkedin_lite = '/assets/linkedin_lite.svg';
const github_dark = '/assets/github_dark.svg';
const github_lite = '/assets/github_lite.svg';

const dark = {"twitter": twitter_dark, "gmail": gmail_dark, "figma": figma_dark, "linkedin": linkedin_dark, "github": github_dark};
const lite = {"twitter": twitter_lite, "gmail": gmail_lite, "figma": figma_lite, "linkedin": linkedin_lite, "github": github_lite};

const Social = ({ item, color, ...props }) => {
  const imgsrc = color == "dark" ? dark[item] : lite[item];
  console.log("grabbing social: ", item);
  return (
    <a type="link" {...props}>
      <img src={imgsrc} style={{width: "100%"}}/>
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