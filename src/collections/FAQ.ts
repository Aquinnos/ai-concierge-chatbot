import { CollectionConfig } from 'payload'

// Collection configuration for the FAQ collection in Payload CMS
const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'language', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Answer',
    },
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'Croatian', value: 'hr' },
        { label: 'English', value: 'en' },
      ],
      required: true,
      defaultValue: 'hr',
      label: 'Language',
    },
  ],
}

export default FAQ
