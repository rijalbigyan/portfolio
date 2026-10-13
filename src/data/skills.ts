import type { SkillGroup } from "../types/content";

// Only items from your bio, coursework and public repos. Confirm or add more (e.g. Nmap, Wireshark, Burp Suite) before listing them.
export const skillGroups: SkillGroup[] = [
  { id: "languages", title: "Programming languages", skills: ["Python", "Bash", "Dart"] },
  { id: "web", title: "Web development", skills: ["React", "TypeScript"] }, // confirm
  { id: "security", title: "Cybersecurity and networking", skills: ["Network security", "Ethical hacking", "Social engineering", "Penetration testing (learning)"] },
  { id: "linux", title: "Linux and automation", skills: ["Linux", "Bash scripting"] },
  { id: "tools", title: "Developer tools and databases", skills: ["Git", "GitHub", "Firebase", "Flutter"] },
];
