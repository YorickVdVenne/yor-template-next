import React from 'react';

export default function Hero({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="p-4 bg-gray-100">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
