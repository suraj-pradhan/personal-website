import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  title: "Suraj Pradhan",
  description: "Notes from someone still figuring it out — shipped anyway.",
  siteUrl: "https://surajpradhan.pages.dev",
  author: {
    name: "Suraj Pradhan",
    bio: "Somewhere between a junior and someone who knows what they're doing..",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Writing", href: "/" },
    // { label: "Tags", href: "/tags" },
  ],
  socials: {
    github: "https://github.com/suraj-pradhan",
    twitter: "https://x.com/surajpradhan",
    linkedin: "https://ph.linkedin.com/in/suraj-pradhan",
  },
  postsPerPage: 5,
  analytics: {
    umami: {
      websiteId: "",
      src: "",
    },
  },
  rss: {
    title: "Suraj Pradhan's Blog",
    description: "Notes from someone still figuring it out — shipped anyway.",
  },
};
