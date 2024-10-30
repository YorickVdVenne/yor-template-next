import dotenv from 'dotenv';
dotenv.config();
const { NEXT_PUBLIC_STRAPI_URL } = process.env;

module.exports = {
  schema: `${NEXT_PUBLIC_STRAPI_URL}/graphql`,
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/graphql-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        omitOperationSuffix: true,
        preResolveTypes: true,
        dedubeFragments: true
      }
    }
  }
};
