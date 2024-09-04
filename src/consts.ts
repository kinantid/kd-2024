import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kinanti Desyanandini",
  EMAIL: "kinanti.desy@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Kina is a product designer focused on data-driven products",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Resources to build a wealthy life and design insightful products.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "threads",
    HREF: "https://www.threads.net/@kinadesy",
  },
  {
    NAME: "github",
    HREF: "https://github.com/kinantid"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kinantid/",
  }
];
