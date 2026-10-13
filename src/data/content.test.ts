import { describe, expect, it } from "vitest";
import { certifications, education } from "./education";
import { projects } from "./projects";
import { profile } from "./profile";
import { skillGroups } from "./skills";

function expectUniqueIds(items: { id: string }[]) {
  const ids = items.map(({ id }) => id);
  expect(new Set(ids).size).toBe(ids.length);
}

describe("portfolio content", () => {
  it("uses unique IDs for repeatable content", () => {
    expectUniqueIds(projects);
    expectUniqueIds(education);
    expectUniqueIds(certifications);
    expectUniqueIds(skillGroups);
  });

  it("contains valid profile contact links", () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(new URL(profile.github).protocol).toBe("https:");
    expect(new URL(profile.linkedin).protocol).toBe("https:");
  });

  it("does not contain empty optional or required links", () => {
    const links = [
      profile.github,
      profile.linkedin,
      profile.resumeUrl,
      ...projects.flatMap((project) => [
        project.repoUrl,
        project.demoUrl,
        project.detailsUrl,
      ]),
      ...certifications.map((certification) => certification.credentialUrl),
    ].filter((link): link is string => link !== undefined);

    expect(links.length).toBeGreaterThan(0);
    expect(profile.email.trim()).not.toBe("");
    links.forEach((link) => expect(link.trim()).not.toBe(""));
  });

  it("gives every certification a recognized status", () => {
    certifications.forEach((certification) => {
      expect(["earned", "in-progress"]).toContain(certification.status);
    });
  });
});
