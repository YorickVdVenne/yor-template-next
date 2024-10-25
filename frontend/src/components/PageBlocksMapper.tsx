import React from 'react';
import Hero from './organisms/Hero';
import ImageText from './molecules/ImageText';

interface PageBlocksMapperProps {
  pageBlocks: any[];
}

const blockComponentMap: { [key: string]: React.ComponentType<any> } = {
  'page-blocks.hero-block': Hero,
  'page-blocks.image-and-text-block': ImageText
};

export default function PageBlocksMapper({
  pageBlocks
}: PageBlocksMapperProps) {
  return (
    <div>
      {pageBlocks.map((block) => {
        const BlockComponent = blockComponentMap[block.__component];
        if (!BlockComponent) {
          return null;
        }
        return <BlockComponent key={block.id} {...block} />;
      })}
    </div>
  );
}
