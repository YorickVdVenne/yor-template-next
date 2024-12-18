import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_STRAPI_URL + '/graphql',
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  cache: new InMemoryCache()
});

export default client;
