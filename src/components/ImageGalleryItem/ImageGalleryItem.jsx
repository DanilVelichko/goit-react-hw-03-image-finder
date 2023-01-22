import React from 'react';
import css from './ImageGalleryItem.module.css';



class ImageGalleryItem extends React.Component {
  render() {
      return (
          <li className={css.ImageGalleryItem}>
  <img className={css.ImageGalleryItem_image} src="" alt="" />
</li>
    );
  }
}

export default ImageGalleryItem;
