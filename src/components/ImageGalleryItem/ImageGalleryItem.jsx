import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import propTypes from 'prop-types';
import React, {useState} from 'react'

export default function ImageGalleryItem({img: { id, webformatURL, largeImageURL }}) {
  const [isShowModal, setIsShowModal] = useState(false)
  const toggleClickImage = e => {
     setIsShowModal(prevState => !prevState )
  };
  return (
    <>
    {isShowModal && (
      <Modal
        closeModal={toggleClickImage}
        largeImageURL={largeImageURL}
      ></Modal>
    )}
    <li
      key={id}
      onClick={toggleClickImage}
      className={css.ImageGalleryItem}
    >
      <img
        src={webformatURL}
        className={css.ImageGalleryItem_image}
        alt=""
      />
    </li>
  </>
  )
}

ImageGalleryItem.propTypes = {
  img: propTypes.array,
};

