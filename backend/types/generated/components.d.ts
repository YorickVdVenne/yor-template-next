import type { Struct, Schema } from '@strapi/strapi';

export interface PageBlocksImageAndTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_image_and_text_blocks';
  info: {
    displayName: 'Image & Text Block';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'atoms.image', false>;
    imageAllign: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface PageBlocksHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_hero_blocks';
  info: {
    displayName: 'Hero Block';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    hero: Schema.Attribute.Component<'organisms.hero', false>;
  };
}

export interface PageBlocksFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_form_blocks';
  info: {
    displayName: 'Form Block';
    icon: 'archive';
    description: '';
  };
  attributes: {
    formInputs: Schema.Attribute.Component<'molecules.form-input', true>;
    submitButton: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface PageBlocksCarouselBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_carousel_blocks';
  info: {
    displayName: 'Carousel Block';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Component<'atoms.image', true>;
    autoplay: Schema.Attribute.Boolean;
  };
}

export interface PageBlocksAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_accordion_blocks';
  info: {
    displayName: 'Accordion Block';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    accordion: Schema.Attribute.Component<'organisms.accordion', false>;
  };
}

export interface OrganismsNavigation extends Struct.ComponentSchema {
  collectionName: 'components_organisms_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'atoms.button', true>;
  };
}

export interface OrganismsHero extends Struct.ComponentSchema {
  collectionName: 'components_organisms_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Component<'atoms.image', false>;
    cta: Schema.Attribute.Component<'molecules.cta', false>;
  };
}

export interface OrganismsFooter extends Struct.ComponentSchema {
  collectionName: 'components_organisms_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socials: Schema.Attribute.Component<'atoms.button', true>;
  };
}

export interface OrganismsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_organisms_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    items: Schema.Attribute.Component<'molecules.accordion-item', true>;
  };
}

export interface MoleculesFormInput extends Struct.ComponentSchema {
  collectionName: 'components_molecules_form_inputs';
  info: {
    displayName: 'Form Input';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'email', 'password']>;
    placeholder: Schema.Attribute.String;
  };
}

export interface MoleculesCta extends Struct.ComponentSchema {
  collectionName: 'components_molecules_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'atoms.button', false>;
    image: Schema.Attribute.Component<'atoms.image', false>;
  };
}

export interface MoleculesCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'atoms.image', false>;
    link: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface MoleculesAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_accordion_items';
  info: {
    displayName: 'Accordion Item';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
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
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    size: Schema.Attribute.Integer;
    color: Schema.Attribute.String;
  };
}

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']>;
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
