import React, { useState } from 'react';
import qa from '../img/qa.png';
import Modal from 'react-modal';
import certificate from '../img/certificate.jpg';
import { useTranslation } from 'react-i18next';

const Academy = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();
  const openModal = () => {
    setModalIsOpen(true)
  };
  const closeModal = () => {
    setModalIsOpen(false)
  };
  return (
    <div class='education_item'>
      <img src={qa} alt='QAacademy' width={80} height={70}></img>
      <p>QA Academy</p>
      <div>
        <button class='education_item-btn btn' onClick={openModal}>{t('education.certificate')}</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {<img class='academy_modal-img' src={certificate} alt='QAacademy' width={1000}></img>}
          <button class='education_item-btn btn' onClick={closeModal}>{t('close')}</button>
        </Modal>
      </div>
    </div>
  )
}

export default Academy