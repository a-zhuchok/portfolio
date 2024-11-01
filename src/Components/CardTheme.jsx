import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import theme from '../img/theme.png';

const CardTheme = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t } = useTranslation();
    const openModal = () => {
        setModalIsOpen(true)
    };
    const closeModal = () => {
        setModalIsOpen(false)
    };
    return (
        <div class='projects_card theme'>
            <h5>{t('projectsCard3.title')}</h5>
            <img class='projects_img' src={theme} alt='theme'/>
            <div class='projects_btns'>
                <a href='https://github.com/a-zhuchok/todo-app/tree/requests'><button class='projects_btn btn' >{t('projects.project')}</button></a>
                <button class='projects_btn btn' onClick={openModal}>{t('projects.details')}</button>
                <Modal class='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                    {<div >
                        <h2>{t('projectsCard3.title')}</h2>
                        <p>{t('projectsCard3.description')}</p>
                        <p>HTML/CSS, JavaScript, React, Context, Styled Components</p>
                    </div>}
                    <button class='projects_btn btn' onClick={closeModal}>{t('close')}</button>
                </Modal>
            </div>
            <h6>JS, HTML/CSS, React, Context, Styled Components</h6>
        </div>
    )
}

export default CardTheme