import type { Project } from "../types/content";

// One data source drives every project card. Entries without `placeholder` come from your public GitHub.
export const projects: Project[] = [
  {
    id: "face-recognition",
    name: "Face Recognition System",
    problem: "Recognizing faces from camera input in a simple desktop app.",
    description:
      "A group project built in Python by an IT 6th-semester team (Abinash, Bigyan, Nabina, Rupali). Add what you personally built and the libraries used.",
    tags: ["Python", "Team project"],
    repoUrl: "https://github.com/rijalbigyan/Face-Recognition-System",
  },
  {
    id: "flutter-projects",
    name: "Flutter Projects",
    problem: "Learning mobile app development by building small, complete apps.",
    description:
      "A collection of Flutter apps including a chat app, to-do app, login app, tic-tac-toe, a dialer and a simple interest calculator.",
    tags: ["Dart", "Flutter", "Firebase"],
    repoUrl: "https://github.com/rijalbigyan/Flutter-Projects",
  },
  {
    id: "quickbite",
    name: "QuickBite",
    problem: "Placeholder: the problem QuickBite solves.",
    description: "Placeholder: not found on your public GitHub. Send the repo link and a summary.",
    tags: ["Placeholder"],
    placeholder: true,
  },
  {
    id: "security-lab",
    name: "Cybersecurity Lab",
    problem: "Placeholder: what you set out to learn or test.",
    description: "Placeholder: lab setup, tools used and findings. Your offensive-security work is the most important gap to fill.",
    tags: ["Linux", "Ethical hacking"],
    placeholder: true,
  },
];
