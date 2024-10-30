import ComponentRenderer from '@/components/ComponentRenderer';
import { PageComponentsDynamicZone } from '@/graphql/generated/graphql-types';
import { getPageByPath } from '@/lib/strapi';
import { getPagePathFromSlug } from '@/lib/utils';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    locale: string;
    slug?: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = params;
  const pageData = await getPageByPath(getPagePathFromSlug(slug), locale);

  if (pageData instanceof Error || !pageData) {
    notFound();
  }

  const components = pageData.components?.filter(
    (component): component is PageComponentsDynamicZone =>
      component !== null && component.__typename !== 'Error'
  );

  return <>{components && <ComponentRenderer components={components} />}</>;
}
