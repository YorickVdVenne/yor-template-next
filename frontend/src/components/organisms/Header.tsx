import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className={`${props.className} p-4 bg-gray-100`}>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.subtitle && <h2 className="text-xl">{props.subtitle}</h2>}
    </header>
  );
}
