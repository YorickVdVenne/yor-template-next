# STRAPI Backend

## 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## Component Structure

This project follows a structured approach for building and managing UI components. Its divided into 4 categories:

### Categories

1. Atoms: Provide basic building blocks.
2. Molecules: Use Atoms to create more complex elements
3. Organisms: use Molecules and Atoms to build larger, content-rich structures.
4. Blocks: leverage all of these to allow for easy and flexible page creation in the content management system. Blocks are the only components a content manager should be allowed to use while creating pages.

## Internationalization

Configure the locales under Settings -> Internationalization

Then you can create different content using different locales.
