import { FcPortraitMode } from 'react-icons/fc';

export default {
  title: 'Photographer',
  name: 'photographer',
  type: 'document',
  icon: FcPortraitMode,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
    },
    {
      title: 'Profile Picture',
      name: 'image',
      type: 'imageAlt',
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'name',
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      };
    },
  },
};
