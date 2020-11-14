import { FcAddImage } from 'react-icons/fc';

export default {
  title: 'Photography',
  name: 'photography',
  type: 'document',
  icon: FcAddImage,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      name: 'photographer',
      type: 'reference',
      to: [{ type: 'photographer' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'title',
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      };
    },
  },
};
