import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const Input = ({ value, onChange, placeholder, type = 'text' }: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border rounded p-2 w-full"
  />
);

export default Input;
