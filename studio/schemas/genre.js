import { FaTheaterMasks } from 'react-icons/fa'

export default {
  name: 'genre',
  title: 'Genre',
  type: 'document',
  icon: FaTheaterMasks,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },
  ],
}
