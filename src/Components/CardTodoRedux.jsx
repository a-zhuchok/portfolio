import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import todolist from '../img/todolist.png';

const CardTodoRedux = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t } = useTranslation();
    const openModal = () => {
        setModalIsOpen(true)
    };
    const closeModal = () => {
        setModalIsOpen(false)
    };
    Modal.setAppElement('#root');
    return (
        <div class='projects_card'>
            <h5>{t('projectsCard2.title')}</h5>
            <img class='projects_img' src={todolist} alt='todo-list'/>
            <div class='projects_btns'>
                <a href='https://a-zhuchok.github.io/todo-app/'><button class='projects_btn btn'>{t('projects.project')}</button></a>
                <button class='projects_btn btn' onClick={openModal}>{t('projects.details')}</button>
                <Modal class='modal' isOpen={modalIsOpen} overlayClassName='modal__overlay' onRequestClose={closeModal}>
                    {<div >
                        <h2>{t('projectsCard2.title')}</h2>
                        <p>{t('projectsCard2.description')}</p>
                        <p>HTML/CSS, JavaScript, React, Redux Toolkit, Swagger, Ant Design, React Router DOM, axios</p>
                        <p>CitHub: <a class='modal_link' href="https://github.com/a-zhuchok/todo-app/tree/redux-requests">https://github.com/a-zhuchok/todo-app/tree/redux-requests</a></p>
                    </div>}
                    <button class='projects_btn btn' onClick={closeModal}>{t('close')}</button>
                </Modal>
            </div>
            <h6>JavaScript, HTML/CSS, React, Redux Toolkit, Ant Design, React Router DOM, axios</h6>
        </div>
    )
}

export default CardTodoRedux