import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: {
      name: 'iZuul Portfolio',
    },
  },
  singletons: {
    about: singleton({
      label: 'About Me',
      path: 'src/content/about/',
      schema: {
        name: fields.text({ label: 'Full Name' }),
        role: fields.text({ label: 'Role / Title' }),
        tagline: fields.text({ label: 'Tagline', multiline: false }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        email: fields.text({ label: 'Email' }),
        github: fields.text({ label: 'GitHub URL' }),
        linkedin: fields.text({ label: 'LinkedIn URL' }),
        twitter: fields.text({ label: 'Twitter / X URL' }),
        photo: fields.image({
          label: 'Profile Photo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
      },
    }),
    skills: singleton({
      label: 'Skills',
      path: 'src/content/skills/',
      schema: {
        categories: fields.array(
          fields.object({
            category: fields.text({ label: 'Category Name' }),
            items: fields.array(fields.text({ label: 'Skill' }), {
              label: 'Skills in this category',
              itemLabel: (props) => props.fields.value.value || 'Skill',
            }),
          }),
          {
            label: 'Skill Categories',
            itemLabel: (props) => props.fields.category.value || 'Category',
          },
        ),
      },
    }),
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      path: 'src/content/posts/*',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedAt: fields.date({ label: 'Published At' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: true }),
        description: fields.text({ label: 'Description', multiline: true }),
        cover: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
    projects: collection({
      label: 'Projects',
      path: 'src/content/projects/*',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (p) => p.fields.value.value || 'Tag',
        }),
        github: fields.url({ label: 'GitHub URL', validation: { isRequired: false } }),
        demo: fields.url({ label: 'Demo URL', validation: { isRequired: false } }),
        image: fields.image({
          label: 'Screenshot',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        featured: fields.checkbox({ label: 'Featured on Homepage', defaultValue: false }),
      },
    }),
  },
});
