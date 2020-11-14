_⚠️ This project is a work in progress and it has a long way to go before it is ready for use._

This is an open source photography portfolio built with [Next.js](https://nextjs.org/). Content management, such as images, is handled by [Sanity.io](https://www.sanity.io/).

This project comes fully bootstrapped with an admin interface, provided by Sanity, and a simple frontend to display all the images in a grid.

## Getting started

Clone the repo, run `npm i` or `yarn` in all the project folders.

You need to sign up for an account at Sanity.io and create a project.

Create a file in `/web` called `.env.local` with the following variables:

```
NEXT_PUBLIC_SITE_URL=<wherever you host the site. localhost:3000 for dev>
SANITY_API_TOKEN=<create api token in Sanity interface or CLI>
SANITY_PREVIEW_SECRET=<shared secret with Sanity studio to resolve previews>
NEXT_PUBLIC_SANITY_PROJECT_ID=<Sanity project id>
```

Then create a file in `/studio` called `.env.development` with the following variables:

```
SANITY_STUDIO_PROJECT_URL=<same as NEXT_PUBLIC_SITE_URL above>
SANITY_STUDIO_PREVIEW_SECRET=<same as SANITY_PREVIEW_SECRET above>
```

Once that's done you can run the studio and web by navigating to the two folders and run `npm run dev` or `yarn dev` in both. The Next.js app will be available on localhost:3000 and the Sanity studio will be available on localhost:3333
