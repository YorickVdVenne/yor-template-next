import React from 'react';

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
  };
}

export default function Hero(props: HeroProps): JSX.Element {
  return (
    <div className="p-4 bg-gray-100">
      <h1>{props.hero.title}</h1>
      <h2>{props.hero.subtitle}</h2>
    </div>
  );
}
