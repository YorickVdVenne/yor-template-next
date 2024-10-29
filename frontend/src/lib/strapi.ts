import {
  GetPage,
  GetPageDocument,
  GetPageVariables
} from '@/graphql/generated/graphql-types';
import client from '@/lib/apolloClient';

export const getPageByPath = async (path: string, locale: string) => {
  const filters = {
    path: {
      eq: path
    }
  };

  const { data } = await client.query<GetPage, GetPageVariables>({
    query: GetPageDocument,
    variables: {
      locale,
      filters,
      limit: 1,
      offset: 0
    }
  });

  if (!data?.pages || data.pages.length === 0) {
    return new Error('Page not found');
  }

  const [page] = data.pages;
  return page;
};
