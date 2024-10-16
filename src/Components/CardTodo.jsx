import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const CardTodo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t } = useTranslation();
    const openModal = () => {
        setModalIsOpen(true)
    };
    const closeModal = () => {
        setModalIsOpen(false)
    };
    return (
        <div class='projects_card'>
            <h5>{t('projectsCard1.title')}</h5>
            <div class='projects_btns'>
                <a href='https://github.com/a-zhuchok/todo-app/tree/requests'><button class='projects_btn btn' >{t('projects.project')}</button></a>
                <button class='projects_btn btn' onClick={openModal}>{t('projects.details')}</button>
                <Modal class='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                    {<div >
                        <h2>{t('projectsCard1.title')}</h2>
                        <p>{t('projectsCard1.description')}</p>
                        <p>HTML/CSS, JavaScript, React, Swagger</p>
                    </div>}
                    <button class='projects_btn btn' onClick={closeModal}>{t('close')}</button>
                </Modal>
            </div>
            <h6>JS, HTML/CSS, React, Swagger</h6>
        </div>
    )
}

export default CardTodo