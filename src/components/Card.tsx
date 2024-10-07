import React, { ReactNode } from 'react';

interface CardProps {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

const Card = ({ header, body, footer }: CardProps) => (
  <div className="card">
    <div className="card-header">{header}</div>
    <div className="card-body">{body}</div>
    <div className="card-footer">{footer}</div>
  </div>
);

export default Card;
