import Searchbar from './Searchbar/Searchbar';
import fetchFunc from './ImageInfo/ImageInfo';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [isLoading, setIsloading] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setIsloading(true);

    fetchFunc(value, per_page, page)
      .then(images => {
        const hits = images.hits.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });
        setImages(prevState => {
          return prevState ? [...prevState, ...hits] : hits;
        });
        setIsShowBtn(page < Math.ceil(images.totalHits / 12));
      })
      .finally(() => setIsloading(false));
  }, [value, page, per_page]);

  const handleFormSubmit = cardTitle => {
    setValue(cardTitle);
    setImages(null);
    setPage(1);
  };
  const handleClick = () => {
    setPage(prevState => {
      return prevState + 1;
    });
  };
  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      {images && <ImageGallery images={images}></ImageGallery>}
      {isLoading && <Loader></Loader>}
      {images?.length > 0 && isShowBtn && (
        <Button handleClick={handleClick}></Button>
      )}
    </div>
  );
}
