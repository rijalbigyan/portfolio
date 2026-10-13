export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string; // e.g. "Computer Science graduate student"
  tagline: string;
  intro: string;
  bio: string[]; // paragraphs
  approach: string; // how you approach technical problems
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string; // set only when /public/resume.pdf exists
  placeholder?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[]; // only tools you have actually used
}

export interface Project {
  id: string;
  name: string;
  problem: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  repoUrl?: string;
  demoUrl?: string;
  detailsUrl?: string;
  placeholder?: boolean; // shows a visible "Placeholder" badge
}

export interface EducationEntry {
  id: string;
  institution: string;
  program: string;
  start?: string; // optional until confirmed
  end: string; // e.g. "Expected 2027"
  coursework: string[];
  placeholder?: boolean;
}

export type CertificationStatus = "earned" | "in-progress";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: CertificationStatus; // required: no unlabeled credentials
  date?: string; // earned date or expected date
  credentialUrl?: string;
  placeholder?: boolean;
}

export interface SectionCopy {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
}

export interface SiteCopy {
  navigation: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    github: string;
    linkedin: string;
    resume: string;
    openMenu: string;
    closeMenu: string;
    mainLabel: string;
  };
  sections: {
    about: SectionCopy;
    skills: SectionCopy;
    projects: SectionCopy;
    education: SectionCopy;
    contact: SectionCopy;
  };
  labels: {
    certifications: string;
    earned: string;
    inProgress: string;
    coursework: string;
    placeholder: string;
    noCertifications: string;
    backToTop: string;
    contactByEmail: string;
  };
}

export interface PageMetadata {
  title: string;
  description: string;
}
