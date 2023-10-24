export const projects = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "tags",
      type: "array",
      of: [
        {
          type: "string",
          name: "tag",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    // {
    //   name: "publishedAt",
    //   title: "Published at",
    //   type: "datetime",
    // },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     about: "about.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { about } = selection;
  //     return { ...selection, subtitle: author && `by ${about}` };
  //   },
  // },
};
