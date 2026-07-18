import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" }
    : { kind: "github", repo: "sahilpabale/portfolio" },

  ui: {
    brand: { name: "sahil.bio" },
  },

  collections: {
    writing: collection({
      label: "Writing",
      slugField: "title",
      path: "src/content/writing/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Drafts don't show up on the site.",
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },

  singletons: {
    intro: singleton({
      label: "Intro",
      path: "src/data/intro",
      format: { data: "json" },
      schema: {
        tagline: fields.text({ label: "Tagline" }),
        paragraphs: fields.array(
          fields.text({ label: "Paragraph", multiline: true }),
          {
            label: "Paragraphs",
            itemLabel: (props) => props.value.slice(0, 60),
          },
        ),
      },
    }),
    work: singleton({
      label: "Work",
      path: "src/data/work",
      format: { data: "json" },
      schema: {
        jobs: fields.array(
          fields.object({
            name: fields.text({ label: "Company" }),
            role: fields.text({ label: "Role" }),
            year: fields.text({ label: "Year" }),
            link: fields.url({ label: "Link" }),
            line: fields.text({ label: "One-liner", multiline: true }),
          }),
          {
            label: "Jobs",
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      },
    }),
    projects: singleton({
      label: "Projects",
      path: "src/data/projects",
      format: { data: "json" },
      schema: {
        projects: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            year: fields.text({ label: "Year" }),
            link: fields.url({ label: "Link" }),
            line: fields.text({ label: "One-liner", multiline: true }),
          }),
          {
            label: "Projects",
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      },
    }),
  },
});
