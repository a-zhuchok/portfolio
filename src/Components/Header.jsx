import React from 'react';
import Title from '../Components/Title';
import Menu from '../Components/Menu';
import SwitchLanguage from './SwitchLanguage';

const Header = () => {

  return (
    <div class='header'>
      <Title />
      <Menu />
      <SwitchLanguage />
    </div>
  )
}

export default Header