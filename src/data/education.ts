import type { EducationEntry, Certification } from "../types/content";

export const education: EducationEntry[] = [
  {
    id: "fitchburg",
    institution: "Fitchburg State University",
    program: "M.S. in Computer Science",
    end: "Expected December 2026",
    coursework: ["Social Engineering", "Ethical Hacking", "Advanced Programming"],
  },
];

// Add only real credentials. Status is required.
export const certifications: Certification[] = [];
