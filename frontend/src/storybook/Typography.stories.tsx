import React from 'react';
import { Meta } from '@storybook/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

type CustomTypography = {
  fontFamily: {
    [key: string]: string;
  };
  fontWeight: {
    [key: string]: string;
  };
};

const customTypography: CustomTypography = {
  fontFamily: {
    // @ts-expect-error: this font does not exist in the default tailwind font families
    roboto: fullConfig.theme.fontFamily.roboto,
    // @ts-expect-error: this font does not exist in the default tailwind font families
    'roboto-mono': fullConfig.theme.fontFamily['roboto-mono']
  },
  fontWeight: {
    thin: fullConfig.theme.fontWeight.thin,
    light: fullConfig.theme.fontWeight.light,
    regular: fullConfig.theme.fontWeight.normal,
    medium: fullConfig.theme.fontWeight.medium,
    semibold: fullConfig.theme.fontWeight.semibold,
    bold: fullConfig.theme.fontWeight.bold,
    black: fullConfig.theme.fontWeight.black
  }
};

export default {
  title: 'Design Tokens/Typography'
} as Meta;

export const Typography = () => (
  <div className="py-12">
    <h1 className="pb-2 text-primary">Typography</h1>
    <div>
      <div className="border-2 rounded-sm border-black p-2">
        <h2>Font Families</h2>
        {Object.entries(customTypography.fontFamily).map(
          ([fontFamilyName, value]) => (
            <div key={fontFamilyName}>
              <h3 className="text-xl font-bold capitalize">{fontFamilyName}</h3>
              <p className="font-sans" style={{ fontFamily: value }}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          )
        )}
      </div>
      <div className="border-2 rounded-sm border-black p-2 mt-2">
        <h2>Font Weights</h2>
        {Object.entries(customTypography.fontWeight).map(
          ([fontWeightName, value]) => (
            <div key={fontWeightName}>
              <h3 className="text-xl font-bold capitalize">{fontWeightName}</h3>
              <p className="font-sans" style={{ fontWeight: value }}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          )
        )}
      </div>
      <div className="border-2 rounded-sm border-black p-2 mt-2">
        <h2>Typescale</h2>
        <div className="flex flex-col gap-2">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p>Body-Large</p>
          <p>Body-Medium</p>
          <p>Body-small</p>
          <code>Code</code>
          <label>Label</label>
        </div>
      </div>
    </div>
  </div>
);
