// src/components/PageBlocksMapper.tsx
import React from 'react';
import Hero from './organisms/Hero';

interface PageBlocksMapperProps {
  pageBlocks: any[];
}

export default function PageBlocksMapper({
  pageBlocks
}: PageBlocksMapperProps) {
  return (
    <div>
      {pageBlocks.map((block) => {
        switch (block.__component) {
          case 'page-blocks.hero-block':
            return (
              <Hero
                key={block.id}
                title={block.hero.title}
                subtitle={block.hero.subtitle}
              />
            );
          // Add cases for other block types here
          default:
            return null;
        }
      })}
    </div>
  );
}
