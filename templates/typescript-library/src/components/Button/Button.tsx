import React from 'react';

import './Button.css';

export interface ButtonProps {
  label: string;
}

const unused: string = 'hello';

const Button = (props: ButtonProps) => {
  return <button className="c5-button">{props.label}</button>;
};

export default Button;
