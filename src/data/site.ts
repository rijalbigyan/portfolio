import { profile } from "./profile";
import type { PageMetadata, SiteCopy } from "../types/content";

export const pageMetadata: PageMetadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.intro,
};

export const siteCopy: SiteCopy = {
  navigation: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    mainLabel: "Main navigation",
  },
  sections: {
    about: {
      id: "about",
      navLabel: "About",
      eyebrow: "Background",
      title: "About me",
    },
    skills: {
      id: "skills",
      navLabel: "Skills",
      eyebrow: "Technical toolkit",
      title: "Skills",
    },
    projects: {
      id: "projects",
      navLabel: "Projects",
      eyebrow: "Selected work",
      title: "Projects",
    },
    education: {
      id: "education",
      navLabel: "Education",
      eyebrow: "Learning",
      title: "Education",
    },
    contact: {
      id: "contact",
      navLabel: "Contact",
      eyebrow: "Get in touch",
      title: "Contact",
    },
  },
  labels: {
    certifications: "Certifications",
    earned: "Earned",
    inProgress: "In progress",
    coursework: "Relevant coursework",
    placeholder: "Placeholder",
    noCertifications: "No certifications listed yet.",
    backToTop: "Back to top",
    contactByEmail: "Send an email",
  },
};
