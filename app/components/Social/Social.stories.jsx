import React from 'react';

import Social from './Social';

export default {
  title: 'Component/Social',
  component: Social
};

const Template = (args) => <Social {...args} />;

export const Twitter = Template.bind({});
Twitter.args = {
  item: "twitter",
  color: 'dark',
  href: "https://twitter.com/e_makesthings"
};

export const Figma = Template.bind({});
Figma.args = {
  item: "figma",
  color: 'dark',
  href: "https://www.figma.com/file/prIZFVnpo9sVv1NuFDbplQ/Portfolio"
};

export const Github = Template.bind({});
Github.args = {
  item: "github",
  color: 'dark',
  href: "https://github.com/twoducky/portfolio"
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  item: "linkedin",
  color: 'dark',
  href: "https://www.linkedin.com/in/evanxandrews/"
};

export const Gmail = Template.bind({});
Gmail.args = {
  item: "gmail",
  color: 'dark',
  onClick: (e)=>{
		e.preventDefault();
		alert("Saved email address to clipboard");
  }
};
