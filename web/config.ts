export const config = {
  site: {
    title: 'Beppe Karlsson',
  },
  cms: {
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // sanity project id
    useCdn: process.env.NODE_ENV === 'production',
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
  },
};
