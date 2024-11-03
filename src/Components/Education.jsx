import React, { useState } from 'react';
import Bsuir from './Bsuir';
import Academy from './Academy';
import Redev from './Redev';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
 
  return (
    <div class='education' id='education'>
      <h2 class='education_title'>{t('education.title')}</h2>
      <div  class='education_list'>
        <Bsuir />
        <Academy />
        <Redev />
      </div>
    </div>
  )
}

export default Education