import React from 'react';

interface ImageTextProps {
  className?: string;
  title: string;
  text: string;
}

export default function ImageText(props: ImageTextProps): JSX.Element {
  return (
    <div
      className={`${props.className} rounded-xl overflow-hidden p-6 flex flex-col`}
    >
      <p>{props.title}</p>
      <p>{props.text}</p>
    </div>
  );
}
