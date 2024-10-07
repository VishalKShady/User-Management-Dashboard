import React, { ReactNode } from 'react';

interface ModalProps {
  title: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const Modal = ({ title, content, footer }: ModalProps) => (
  <div className="modal">
    <div className="modal-header">{title}</div>
    <div className="modal-body">{content}</div>
    <div className="modal-footer">{footer}</div>
  </div>
);

export default Modal;
