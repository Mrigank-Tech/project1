import React from 'react';
import pic1 from './Images/a8.jpg';
import Common from './Common';
const About = () => {
  return (
    <>
      <Common 
      name="Welcom to About page" 
      imgsrc={pic1} visit="/contact" 
      btnname="Contact Now" />
    </>
  );
};

export default About;