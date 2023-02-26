import { Backdrop, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';


const portal = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKey);
  }

  hendelKey = e => {
    if (e.code === 'Escape') {
      this.props.onShow();
    }
  };

  hendelClickBg = e => {
    if (e.target === e.currentTarget) this.props.onShow();
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.hendelClickBg}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>,
      portal
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired
}

export default Modal;
