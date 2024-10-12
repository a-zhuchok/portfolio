import React from 'react';
import Title from '../Components/Title';
import Menu from '../Components/Menu';
import ToggleLanguage from '../Components/ToggleLanguage';

const Header = () => {

  return (
    <div class='header'>
      <Title />
      <Menu />
      <ToggleLanguage />
    </div>
  )
}

export default Header