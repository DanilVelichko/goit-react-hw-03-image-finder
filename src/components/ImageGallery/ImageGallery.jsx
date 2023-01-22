import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    return (
      <ul className={css.gallery}>
        {this.props.images.map(image => {
          return (
            <ImageGalleryItem
              id={image.id}
              key={image.id}
              smallFoto={image.webformatURL}
              largeFoto={image.largeImageURL}
              alt={image.tags}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
