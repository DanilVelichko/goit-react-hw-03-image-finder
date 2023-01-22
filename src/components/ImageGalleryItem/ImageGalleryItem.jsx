import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({id, smallFoto, largeFoto, alt}) =>{
 
    return (
      <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image}
                src={smallFoto}
                alt={alt} />
      </li>
    );

}

export default ImageGalleryItem;
