import React, { useState } from 'react';
import Modal from 'react-modal';
import certificate from '../img/certificate.jpg';
import { useTranslation } from 'react-i18next';

const Academy = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();
  const openModal = () => {
    setModalIsOpen(true)
  };
  Modal.setAppElement('#root');
  const closeModal = () => {
    setModalIsOpen(false)
  };
  return (
    <div class='education_item'>
      <p>QA Academy</p>
      <div>
        <button class='education_item-btn btn' onClick={openModal}>{t('education.certificate')}</button>
        <Modal class='modal' isOpen={modalIsOpen} overlayClassName='modal__overlay' onRequestClose={closeModal}>
          {<img class='academy_modal-img' src={certificate} alt='QAacademy' width={1000}></img>}
          <button class='education_item-btn btn' onClick={closeModal}>{t('close')}</button>
        </Modal>
      </div>
    </div>
  )
}

export default Academy