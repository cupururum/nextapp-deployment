export default {
    name: 'project',
    title: 'Project',
    type: 'document',
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
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'header',
        title: 'Header',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        header: 'header',
        description: 'description',
        media: 'mainImage',
      }
    }
  }
  