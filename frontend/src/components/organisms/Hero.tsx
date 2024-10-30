import { HeroBlock } from '@/graphql/generated/graphql-types';
import Image from 'next/image';
import React from 'react';

export default function Hero(props: HeroBlock): JSX.Element {
  const { title, subTitle, backgroundImage } = props;

  return (
    <div className="p-4 bg-gray-100 mb-24">
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {backgroundImage && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alternativeText ?? ''}
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
