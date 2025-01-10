import React from 'react';
import Description from './Description';
import comp2 from '../img/comp2.png';

const AboutMe = () => {

  return (
    <div class='about-me' id='about-me'>
      <img class='about-me_avatar' src={comp2} alt='avatar'></img>
      <Description />
    </div>
  )
}

export default AboutMe