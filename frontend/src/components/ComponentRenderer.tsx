import React from 'react';

// Components
import Hero from './organisms/Hero';
import {
  HeroBlock,
  PageComponentsDynamicZone
} from '@/graphql/generated/graphql-types';

interface ComponentRendererProps {
  components: Array<PageComponentsDynamicZone>;
}

const componentMap = {
  ComponentBlocksHero: Hero
};

type ComponentPropsMap = {
  ComponentBlocksHero: HeroBlock;
};

export default function ComponentRenderer({
  components
}: ComponentRendererProps) {
  return (
    <div>
      {components.map((componentData, key) => {
        const { __typename } = componentData;
        if (!__typename) return <p key={key}>no __typename</p>;
        if (__typename === 'Error') return <p key={key}>Error</p>;

        const Component = componentMap[__typename];
        if (!Component) {
          return (
            <p key={key}>
              {`Component ${__typename} was used but has not been implemented yet.`}
            </p>
          );
        }

        const componentProps =
          componentData as ComponentPropsMap[typeof __typename];

        return <Component key={key} {...componentProps} />;
      })}
    </div>
  );
}
