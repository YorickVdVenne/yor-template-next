import type { Struct, Schema } from '@strapi/strapi';

export interface PageBlocksImageAndTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_image_and_text_blocks';
  info: {
    displayName: 'Image & Text Block';
    icon: 'server';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Text: Schema.Attribute.RichText;
    Image: Schema.Attribute.Component<'atoms.image', false>;
    ImageAllign: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface PageBlocksHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_hero_blocks';
  info: {
    displayName: 'Hero Block';
    icon: 'chartBubble';
  };
  attributes: {
    Hero: Schema.Attribute.Component<'organisms.hero', false>;
  };
}

export interface PageBlocksFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_form_blocks';
  info: {
    displayName: 'Form Block';
    icon: 'archive';
  };
  attributes: {
    FormInputs: Schema.Attribute.Component<'molecules.form-input', true>;
    SubmitButton: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface PageBlocksCarouselBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_carousel_blocks';
  info: {
    displayName: 'Carousel Block';
    icon: 'landscape';
  };
  attributes: {
    Images: Schema.Attribute.Component<'atoms.image', true>;
    Autoplay: Schema.Attribute.Boolean;
  };
}

export interface PageBlocksAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_accordion_blocks';
  info: {
    displayName: 'Accordion Block';
    icon: 'server';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Accordion: Schema.Attribute.Component<'organisms.accordion', false>;
  };
}

export interface OrganismsNavigation extends Struct.ComponentSchema {
  collectionName: 'components_organisms_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    Links: Schema.Attribute.Component<'atoms.button', true>;
  };
}

export interface OrganismsHero extends Struct.ComponentSchema {
  collectionName: 'components_organisms_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    BackgroundImage: Schema.Attribute.Component<'atoms.image', false>;
    CTA: Schema.Attribute.Component<'molecules.cta', false>;
  };
}

export interface OrganismsFooter extends Struct.ComponentSchema {
  collectionName: 'components_organisms_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Socials: Schema.Attribute.Component<'atoms.button', true>;
  };
}

export interface OrganismsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_organisms_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    Items: Schema.Attribute.Component<'molecules.accordion-item', true>;
  };
}

export interface MoleculesFormInput extends Struct.ComponentSchema {
  collectionName: 'components_molecules_form_inputs';
  info: {
    displayName: 'Form Input';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['text', 'email', 'password']>;
    Placeholder: Schema.Attribute.String;
  };
}

export interface MoleculesCta extends Struct.ComponentSchema {
  collectionName: 'components_molecules_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Button: Schema.Attribute.Component<'atoms.button', false>;
    Image: Schema.Attribute.Component<'atoms.image', false>;
  };
}

export interface MoleculesCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Component<'atoms.image', false>;
    Link: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface MoleculesAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Content: Schema.Attribute.RichText;
  };
}

export interface AtomsImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    altText: Schema.Attribute.String;
  };
}

export interface AtomsIcon extends Struct.ComponentSchema {
  collectionName: 'components_atoms_icons';
  info: {
    displayName: 'Icon';
    icon: 'alien';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Size: Schema.Attribute.Integer;
    Color: Schema.Attribute.String;
  };
}

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Label: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    Variant: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-blocks.image-and-text-block': PageBlocksImageAndTextBlock;
      'page-blocks.hero-block': PageBlocksHeroBlock;
      'page-blocks.form-block': PageBlocksFormBlock;
      'page-blocks.carousel-block': PageBlocksCarouselBlock;
      'page-blocks.accordion-block': PageBlocksAccordionBlock;
      'organisms.navigation': OrganismsNavigation;
      'organisms.hero': OrganismsHero;
      'organisms.footer': OrganismsFooter;
      'organisms.accordion': OrganismsAccordion;
      'molecules.form-input': MoleculesFormInput;
      'molecules.cta': MoleculesCta;
      'molecules.card': MoleculesCard;
      'molecules.accordion-item': MoleculesAccordionItem;
      'atoms.image': AtomsImage;
      'atoms.icon': AtomsIcon;
      'atoms.button': AtomsButton;
    }
  }
}
