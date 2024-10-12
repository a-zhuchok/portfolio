import React from 'react';
import CardTodo from './CardTodo';
import CardTodoRedux from './CardTodoRedux';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div class='projects' id='projects'>
      <h2 class='projects_title'>{t('projects.title')}</h2>
      <div class='projects_cards'>
        <CardTodo/>
        <CardTodoRedux/>
      </div>
    </div>
  )
}

export default Projects