import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.props.onModalCloseByEsc();
      }
    });
  }

  render() {
    return (
      <div
        onClick={this.props.onModalClose}
        onKeyDown={this.props.onKeyDown}
        className="Overlay"
      >
        <div className="Modal">
          <img className="LargeGalleryImage" src={this.props.largeImg} alt="" />
        </div>
      </div>
    );
  }
}
