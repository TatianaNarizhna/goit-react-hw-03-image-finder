import React from "react";

const GalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-img={largeImageURL}
      />
    </li>
  );
};

export default GalleryItem;
