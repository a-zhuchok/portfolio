import React from 'react';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion';

const Description = () => {
  const { t } = useTranslation();
  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    }, 
    visible: custom=>({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  }
  
  return (
    
      <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      class='about-me_description'>
        <h2 class='about-me_title'>{t('about-me.title')}</h2>
        <div class='about-me_hardskills'>
          <h3 class='hardskills_title'>{t('about-me.hardskills_title')}</h3>
          <ul class='hardskills_list'>
            <motion.li custom={1} variants={textAnimation} class='hardskills_list-item'>HTML/CSS</motion.li>
            <motion.li custom={2} variants={textAnimation} class='hardskills_list-item'>JavaScript</motion.li>
            <motion.li custom={3} variants={textAnimation} class='hardskills_list-item'>React</motion.li>
            <motion.li custom={4} variants={textAnimation} class='hardskills_list-item'>Redux</motion.li>
            <motion.li custom={5} variants={textAnimation} class='hardskills_list-item'>Git</motion.li>
            <motion.li custom={6} variants={textAnimation} class='hardskills_list-item'>DevTools</motion.li>
            <motion.li custom={7} variants={textAnimation} class='hardskills_list-item'>Manual Testing</motion.li>
            <motion.li custom={8} variants={textAnimation} class='hardskills_list-item'>VisialStudio</motion.li>
            <motion.li custom={9} variants={textAnimation} class='hardskills_list-item'>Figma, Canva</motion.li>
            <motion.li custom={10} variants={textAnimation} class='hardskills_list-item'>Networking basics</motion.li>
            <motion.li custom={11} variants={textAnimation} class='hardskills_list-item'>SQL basics</motion.li>
            <motion.li custom={12} variants={textAnimation} class='hardskills_list-item'>Virtualbox</motion.li>
            <motion.li custom={13} variants={textAnimation} class='hardskills_list-item'>Windows/Linux</motion.li>
            <motion.li custom={14} variants={textAnimation} class='hardskills_list-item'>Agile</motion.li>
            <motion.li custom={15} variants={textAnimation} class='hardskills_list-item'>Jira</motion.li>
            <motion.li custom={16} variants={textAnimation} class='hardskills_list-item'>Swagger</motion.li>
          </ul>
        </div>
      </motion.div>
      
  )
}

export default Description