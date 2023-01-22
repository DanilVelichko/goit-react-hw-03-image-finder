import React from 'react';
import css from './Modal.module.css';



class Modal extends React.Component {
  render() {
      return (
          <div className={css.overlay}>
          <div div className = { css.modal } >
    <img src="" alt="" />
  </div>
</div>
    );
  }
}

export default Modal;
