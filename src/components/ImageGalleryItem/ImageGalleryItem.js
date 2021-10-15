import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };
  render() {
    return this.props.images.map(({ webformatURL, id, tags }) => {
      return (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      );
    });
  }
}
