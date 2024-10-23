import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={`${props.className} bg-blue-500 text-white font-semibold py-2 px-4 rounded`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
