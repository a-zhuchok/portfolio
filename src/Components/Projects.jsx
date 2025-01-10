import React from 'react';
import CardTodo from './CardTodo';
import CardTodoRedux from './CardTodoRedux';
import CardTheme from './CardTheme';
import { useTranslation } from 'react-i18next';
import CardYoutubeSPA from './CardYoutubeSPA';
import CardHackerNews from './CardHackerNews';

const Projects = () => {
  const { t } = useTranslation();
 
  return (
    <div
      class='projects' id='projects'>
      <h2 class='projects_title title'>{t('projects.title')}</h2>
      <div class='projects_cards'>
        <CardYoutubeSPA/>
        <CardHackerNews/>
        <CardTodo/>
        <CardTodoRedux/>
        <CardTheme/>
      </div>
    </div>
  )
}

export default Projects