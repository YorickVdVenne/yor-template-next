import type { Struct, Schema } from '@strapi/strapi';

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

export interface MoleculesLinkList extends Struct.ComponentSchema {
  collectionName: 'components_molecules_link_lists';
  info: {
    displayName: 'LinkList';
    icon: 'manyWays';
  };
  attributes: {
    links: Schema.Attribute.Component<'atoms.link', true> &
      Schema.Attribute.Required;
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
    link: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'chartBubble';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AtomsLink extends Struct.ComponentSchema {
  collectionName: 'components_atoms_links';
  info: {
    displayName: 'Link';
    icon: 'oneWay';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    description: Schema.Attribute.Text;
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
      'organisms.navigation': OrganismsNavigation;
      'organisms.footer': OrganismsFooter;
      'molecules.link-list': MoleculesLinkList;
      'molecules.card': MoleculesCard;
      'blocks.hero': BlocksHero;
      'atoms.link': AtomsLink;
      'atoms.button': AtomsButton;
    }
  }
}
