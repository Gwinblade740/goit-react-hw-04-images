import React, { useCallback, useEffect } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

export default function Modal({ closeModal, largeImageURL }) {
  const handleEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);
  const onClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div class={css.Overlay} onClick={onClick}>
      <div class={css.Modal}>
        <img src={largeImageURL} className={css.ModalImg} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: propTypes.string.isRequired,
};
