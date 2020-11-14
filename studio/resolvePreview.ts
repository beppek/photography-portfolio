const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;

type Document = {
  _type: string;
  _id: string;
  slug?: { current: string };
};

const resolver = {
  route: (document: Document) =>
    !document.slug || !document.slug.current
      ? projectUrl
      : `${projectUrl}/${document.slug.current}`,
  staticRoute: (document: Document) => {
    const path =
      document._id === 'index'
        ? ''
        : document._id === 'account'
        ? 'account'
        : '';
    return `${projectUrl}/${path}`;
  },
  staticPage: (document: Document) => {
    const path = document._id.replace('-', '/');
    return `${projectUrl}/${path}`;
  },
  post: (document: Document) => `${projectUrl}/blog/${document.slug.current}`,
  siteSettings: () => projectUrl,
};

export default function resolvePreviewUrl(document: Document) {
  return resolver[document._type]?.(document) || projectUrl;
}
