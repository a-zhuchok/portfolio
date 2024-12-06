import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import youtubeSPA from '../img/youtubeSPA.png';

const CardYoutubeSPA = () => {
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
            <h5>{t('projectsCard4.title')}</h5>
            <img class='projects_img' src={youtubeSPA} alt='youtubeSPA'/>
            <div class='projects_btns'>
                <a href='https://earnest-liger-465591.netlify.app/'><button class='projects_btn btn'>{t('projects.project')}</button></a>
                <button class='projects_btn btn' onClick={openModal}>{t('projects.details')}</button>
                <Modal class='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                    {<div >
                        <h2>{t('projectsCard4.title')}</h2>
                        <p>{t('projectsCard4.description')}</p>
                        <p>HTML/CSS, JavaScript, React, Redux Toolkit, YouTube API, Swagger, Ant Design, React Router DOM, axios</p>
                        <p>CitHub: <a class='modal_link' href="https://github.com/a-zhuchok/YouTubeSPA">https://github.com/a-zhuchok/todo-app/tree/redux-requests</a></p>
                    </div>}
                    <button class='projects_btn btn' onClick={closeModal}>{t('close')}</button>
                </Modal>
            </div>
            <h6>JS, HTML/CSS, React, Redux Toolkit, YouTube API, Swagger, Ant Design, React Router DOM, axios</h6>
        </div>
    )
}

export default CardYoutubeSPA