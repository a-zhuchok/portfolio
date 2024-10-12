import React, { useState } from 'react';
import Modal from 'react-modal';
import resume from '../img/resume.jpg';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true)
  };
  const closeModal = () => {
    setModalIsOpen(false)
  };
  return (
    <div class='resume' id='resume'>
      <div class='resume_btn' onClick={openModal}>
        <h3>{t('resume')}</h3>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {<img src={resume} alt='resume'></img>}
        <button class='resume_close-btn btn' onClick={closeModal}>{t('close')}</button>
      </Modal>
    </div>
  )
}

export default Resume