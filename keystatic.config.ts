import { config, fields, singleton, collection } from "@keystatic/core";

// Storage mode: 'local' in development, 'github' in production (or overridden by PUBLIC_KEYSTATIC_STORAGE_KIND)
const isProd = import.meta.env.PROD;
const storageKind = (import.meta.env.PUBLIC_KEYSTATIC_STORAGE_KIND || (isProd ? "github" : "local")) as "github" | "local";

const repoOwner = import.meta.env.PUBLIC_KEYSTATIC_REPO_OWNER || "iZuul";
const repoName = import.meta.env.PUBLIC_KEYSTATIC_REPO_NAME || "curriculum-vitae";

export default config({
  storage:
    storageKind === "github"
      ? {
          kind: "github",
          repo: {
            owner: repoOwner,
            name: repoName,
          },
        }
      : {
          kind: "local",
        },
  ui: {
    brand: {
      name: "iZuul Portfolio",
    },
  },
  singletons: {
    about: singleton({
      label: "About Me",
      path: "src/content/about/",
      schema: {
        name: fields.text({ label: "Full Name" }),
        role: fields.text({ label: "Role / Title" }),
        tagline: fields.text({ label: "Tagline", multiline: false }),
        greeting: fields.text({
          label: "About Greeting",
          description: "e.g. Hey, I'm Zulfa 👋",
        }),
        bio: fields.text({ label: "Bio", multiline: true }),
        location: fields.text({
          label: "Location",
          description: "e.g. Yogyakarta, ID",
        }),
        education: fields.text({
          label: "Education",
          description: "e.g. Teknologi Informasi, UGM.",
        }),
        focus: fields.text({
          label: "Focus Area",
          description: "e.g. Frontend & Web",
        }),
        status: fields.text({
          label: "Status",
          description: "e.g. Open to work",
        }),
        contact_heading: fields.text({
          label: "Contact Section Heading",
          description: "e.g. Get in Touch",
        }),
        contact_description: fields.text({
          label: "Contact Section Description",
          multiline: true,
        }),
        email: fields.text({ label: "Email" }),
        github: fields.text({ label: "GitHub URL" }),
        linkedin: fields.text({ label: "LinkedIn URL" }),
        twitter: fields.text({ label: "Twitter / X URL" }),
        photo: fields.image({
          label: "Profile Photo",
          directory: "public/images",
          publicPath: "/images/",
        }),
      },
    }),
    skills: singleton({
      label: "Skills",
      path: "src/content/skills/",
      schema: {
        categories: fields.array(
          fields.object({
            category: fields.text({ label: "Category Name" }),
            items: fields.array(fields.text({ label: "Skill" }), {
              label: "Skills in this category",
              itemLabel: (props) => props.value || "Skill",
            }),
          }),
          {
            label: "Skill Categories",
            itemLabel: (props) => props.fields.category.value || "Category",
          },
        ),
      },
    }),
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedAt: fields.date({ label: "Published At" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: true }),
        description: fields.text({ label: "Description", multiline: true }),
        cover: fields.image({
          label: "Cover Image",
          directory: "public/images/posts",
          publicPath: "/images/posts/",
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
    projects: collection({
      label: "Projects",
      path: "src/content/projects/*",
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (p) => p.value || "Tag",
        }),
        github: fields.url({
          label: "GitHub URL",
          validation: { isRequired: false },
        }),
        demo: fields.url({
          label: "Demo URL",
          validation: { isRequired: false },
        }),
        image: fields.image({
          label: "Screenshot",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
        featured: fields.checkbox({
          label: "Featured on Homepage",
          defaultValue: false,
        }),
      },
    }),
    themes: collection({
      label: "Themes Marketplace",
      path: "src/content/themes/*",
      format: { contentField: "content" },
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Theme Title" } }),
        tagline: fields.text({ label: "Short Tagline / Catchphrase" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Education & Course Platform", value: "education" },
            { label: "Corporate & Consulting", value: "corporate" },
            { label: "Creative Agency & Studio", value: "agency" },
            { label: "Local Business & SME", value: "local-business" },
            { label: "Personal Portfolio", value: "portfolio" },
          ],
          defaultValue: "education",
        }),
        stack: fields.select({
          label: "Primary Tech Stack",
          options: [
            { label: "Astro 5 + Tailwind v4", value: "astro" },
            { label: "Next.js 15 + Tailwind v4", value: "nextjs" },
            { label: "HTML5 + Tailwind v4 (Static)", value: "html-tailwind" },
          ],
          defaultValue: "astro",
        }),
        frameworkVersion: fields.text({ label: "Framework Version (e.g. Astro 5.1 / Next.js 15)" }),
        featured: fields.checkbox({ label: "Featured Theme", defaultValue: false }),
        published: fields.checkbox({ label: "Published (Visible in Catalog)", defaultValue: true }),
        publishedAt: fields.date({ label: "Release Date" }),
        demoUrl: fields.url({ label: "Live Demo URL" }),
        thumbnail: fields.image({
          label: "Thumbnail Cover",
          directory: "public/images/themes",
          publicPath: "/images/themes/",
        }),
        priceIdrStandard: fields.integer({ label: "IDR Standard Price", defaultValue: 79000 }),
        priceIdrExtended: fields.integer({ label: "IDR Extended Price", defaultValue: 249000 }),
        checkoutMayarStandard: fields.url({ label: "Mayar Checkout URL (Standard)", validation: { isRequired: false } }),
        checkoutMayarExtended: fields.url({ label: "Mayar Checkout URL (Extended)", validation: { isRequired: false } }),
        features: fields.array(fields.text({ label: "Key Feature" }), {
          label: "Key Features List",
          itemLabel: (props) => props.value || "Feature",
        }),
        content: fields.mdx({ label: "Detailed Overview & Documentation" }),
      },
    }),
  },
});
