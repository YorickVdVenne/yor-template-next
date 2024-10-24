import { notFound } from 'next/navigation';

export async function fetchPageBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/pages?filters[slug][$eq]=${slug}&populate[pageBlocks][populate]=*`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch page data');
    }
    const data = await res.json();

    if (!data.data || data.data.length === 0) {
      notFound();
    }

    return data.data[0];
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
