import React from 'react';
import avatar from '../img/avatar.png';
import Description from './Description';

const AboutMe = () => {

  return (
    <div class='about-me' id='about-me'>
      <img class='about-me_avatar' src={avatar} alt='avatar'></img>
      <Description />
    </div>
  )
}

export default AboutMe