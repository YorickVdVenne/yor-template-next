import React from 'react';
import { Meta } from '@storybook/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export default {
  title: 'Design Tokens/Colors'
} as Meta;

type CustomColors = {
  [key: string]: {
    [shade: string]: string;
  };
};

const customColors: CustomColors = {
  // @ts-expect-error: primary color does not exist in the default tailwind colors
  primary: fullConfig.theme.colors.primary,
  // @ts-expect-error: secondary color does not exist in the default tailwind colors
  secondary: fullConfig.theme.colors.secondary,
  neutral: fullConfig.theme.colors.neutral,
  // @ts-expect-error: success color does not exist in the default tailwind colors
  success: fullConfig.theme.colors.success,
  // @ts-expect-error: error color does not exist in the default tailwind colors
  error: fullConfig.theme.colors.error,
  // @ts-expect-error: warning color does not exist in the default tailwind colors
  warning: fullConfig.theme.colors.warning,
  // @ts-expect-error: info color does not exist in the default tailwind colors
  info: fullConfig.theme.colors.info
};

export const Colors = () => {
  return (
    <div className="py-12">
      <h1 className="pb-2 text-primary">Colors</h1>
      <div className="space-y-8">
        {Object.entries(customColors).map(([colorName, shades]) => (
          <div key={colorName}>
            <h2 className="text-xl font-bold capitalize">{colorName}</h2>
            <div className="flex flex-wrap">
              {typeof shades === 'object' &&
                Object.entries(shades).map(([shade, value]) => (
                  <div
                    key={shade}
                    className="w-24 h-24"
                    style={{ backgroundColor: value }}
                  >
                    <p className="text-xs text-white">{shade}</p>
                    <p className="text-xs text-white">{value}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
