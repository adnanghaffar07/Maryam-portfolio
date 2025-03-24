const homePageSchema = {
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero sec
    {
      name: "header",
      title: "Header Section",
      type: "object",
      fields: [
        {
          name: "firstWords",
          title: "First Words",
          type: "string",
        },
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "firstField",
          title: "First Field",
          type: "string",
        },
        {
          name: "separator",
          title: "Separator",
          type: "string",
        },
        {
          name: "secondField",
          title: "Second Field",
          type: "string",
        },
        {
          name: "designation",
          title: "Designation",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          name: "firstButton",
          title: "First Button",
          type: "object",
          fields: [
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            },
          ],
        },
        {
          name: "secondButton",
          title: "Second Button",
          type: "object",
          fields: [
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            },
          ],
        },
        {
          name: "socialIconSection",
          title: "Social Icon Section",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "iconsArray",
              title: "Icons Array",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: { hotspot: true },
                      fields: [
                        {
                          name: "alt",
                          title: "Alt Text",
                          type: "string",
                        },
                      ],
                    },
                    {
                      name: "link",
                      title: "Link",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Logo sec
    {
      name: "toolsLogoSection",
      title: "Tools & Logo Section",
      type: "object",
      fields: [
        {
          name: "logoArray",
          title: "Logo Array",
          type: "array",
          of: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // tools and Expertise
    {
      name: "toolsAndExpertise",
      title: "Tools and Expertise",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "cardsArray",
          title: "Cards Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "card",
                  title: "Card",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "heading",
                          title: "Heading",
                          type: "string",
                        },
                        {
                          name: "description",
                          title: "Description",
                          type: "string",
                        },
                        {
                          name: "images",
                          title: "Images",
                          type: "array",
                          of: [
                            {
                              name: "image",
                              title: "Image",
                              type: "image",
                              options: { hotspot: true },
                              fields: [
                                {
                                  name: "alt",
                                  title: "Alt Text",
                                  type: "string",
                                },
                              ],
                            },
                          ],
                        },
                        // ],
                        // },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // About me section
    {
      name: "aboutMe",
      title: "About me",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "descriptionArray",
          title: "Description Array",
          type: "array",
          of: [
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    // Hire Me section
    {
      name: "hireMe",
      title: "Hire Me",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "buttonsArray",
          title: "Button Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "buttonText",
                  title: "Button Text",
                  type: "string",
                },
                {
                  name: "buttonDescription",
                  title: "Button Description",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "mainButton",
          title: "Main Button",
          type: "object",
          fields: [
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            },
          ],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    // Recent Projects Section
    {
      name: "recentProjects",
      title: "Recent Projects",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "buttonsArray",
          title: "Button Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "buttonText",
                  title: "Button Text",
                  type: "string",
                },
                {
                  name: "category",
                  title: "Category",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "projectsArray",
          title: "Projects Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "categories",
                  title: "Categories",
                  type: "array",
                  of: [
                    {
                      name: "category",
                      title: "Category",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Life Style section
    {
      name: "lifeStyle",
      title: "Life Style",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "buttons",
          title: "Buttons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "Title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "category",
                  title: "Category",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "cardsArray",
          title: "Cards Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "category",
                  title: "Category",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                    {
                      name: "hoverText",
                      title: "Hover Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "tags",
                  title: "Tags",
                  type: "array",
                  of: [
                    {
                      name: "tag",
                      title: "Tag",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "heading",
                  title: "Heading",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "authorName",
                  title: "Author Name",
                  type: "string",
                },
                {
                  name: "date",
                  title: "Date",
                  type: "string",
                },
                {
                  name: "shares",
                  title: "Shares",
                  type: "string",
                },
                {
                  name: "authorImage",
                  title: "Author Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string",
                },
                {
                  name: "buttonText",
                  title: "Button Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // Services Highlight
    {
      name: "servicesHightlight",
      title: "Services Highlight",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "servicesArray",
          title: "Services Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "serviceName",
                  title: "Service Name",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          name: "meetingButton",
          title: "Meeting Button",
          type: "object",
          fields: [
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // Testimonials
    {
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "testimonialArray",
          title: "Testimonial Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "publishdate",
                  title: "Publish Date",
                  type: "string",
                },
                {
                  name: "personIcon",
                  title: "Person Icon",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "platformIcon",
                  title: "Platform Icon",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "rating",
                  title: "Rating",
                  type: "number",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string",
                },
                {
                  name: "buttonText",
                  title: "Button Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // Achievements
    {
      name: "achievements",
      title: "Achievements",
      type: "object",
      fields: [
        {
          name: "subTitle",
          title: "Sub Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "achievementsArray",
          title: "Achievements Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "heading",
                  title: "Heading",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // Form section
    {
      name: "formSection",
      title: "Form Section",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "subheading",
          title: "Subheading",
          type: "string",
        },
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "designation",
          title: "Designation",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          name: "iconsArray",
          title: "Icons Array",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default homePageSchema;
