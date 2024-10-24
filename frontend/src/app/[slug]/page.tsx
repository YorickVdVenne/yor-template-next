import PageBlocksMapper from '@/components/PageBlocksMapper';
import { fetchPageBySlug } from '@/utils/api';
import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const page = await fetchPageBySlug(params.slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <PageBlocksMapper pageBlocks={page.pageBlocks} />
    </>
  );
}
