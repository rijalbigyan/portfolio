import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import { certifications, education } from "./data/education";
import { projects } from "./data/projects";
import { profile } from "./data/profile";
import { siteCopy } from "./data/site";
import { skillGroups } from "./data/skills";
import type { CertificationStatus, SectionCopy } from "./types/content";

function SectionHeading({ section }: { section: SectionCopy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{section.eyebrow}</p>
      <h2 id={`${section.id}-title`}>{section.title}</h2>
    </div>
  );
}

function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="hero-visual"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <svg
        className="hero-network"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="260" cy="260" r="186" className="network-orbit" />
        <circle cx="260" cy="260" r="132" className="network-orbit network-orbit-inner" />
        <path
          d="M260 74V446M74 260H446M128.5 128.5L391.5 391.5M391.5 128.5L128.5 391.5"
          className="network-lines"
        />
        <path
          d="M260 128L347 173V276L260 326L173 276V173L260 128Z"
          className="network-shape"
        />
        <circle cx="260" cy="128" r="8" className="network-node" />
        <circle cx="347" cy="173" r="8" className="network-node" />
        <circle cx="347" cy="276" r="8" className="network-node" />
        <circle cx="260" cy="326" r="8" className="network-node" />
        <circle cx="173" cy="276" r="8" className="network-node" />
        <circle cx="173" cy="173" r="8" className="network-node" />
        <circle cx="260" cy="260" r="30" className="network-core" />
        <circle cx="260" cy="260" r="5" className="network-core-dot" />
      </svg>
      <div className="visual-caption">
        <span className="visual-indicator" />
        <span>{profile.tagline}</span>
      </div>
    </motion.div>
  );
}

export default function App() {
  const certificationGroups: { status: CertificationStatus; label: string }[] = [
    { status: "earned", label: siteCopy.labels.earned },
    { status: "in-progress", label: siteCopy.labels.inProgress },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section aria-labelledby="hero-title" className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{profile.title}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={17} />
                Get in touch
                <ArrowDownRight aria-hidden="true" size={16} />
              </a>
              {profile.github && (
                <a className="button button-secondary" href={profile.github}>
                  <Github aria-hidden="true" size={17} />
                  GitHub
                </a>
              )}
            </div>
          </div>
          <HeroVisual />
        </section>

        <section
          aria-labelledby={`${siteCopy.sections.about.id}-title`}
          className="content-section about-section"
          id={siteCopy.sections.about.id}
        >
          <SectionHeading section={siteCopy.sections.about} />
          <div className="about-copy">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {!profile.placeholder && <p>{profile.approach}</p>}
          </div>
        </section>

        <section
          aria-labelledby={`${siteCopy.sections.skills.id}-title`}
          className="content-section"
          id={siteCopy.sections.skills.id}
        >
          <SectionHeading section={siteCopy.sections.skills} />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.id}>
                <h3>{group.title}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby={`${siteCopy.sections.projects.id}-title`}
          className="content-section"
          id={siteCopy.sections.projects.id}
        >
          <SectionHeading section={siteCopy.sections.projects} />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-heading">
                  <div>
                    {project.placeholder && (
                      <span className="placeholder-badge">{siteCopy.labels.placeholder}</span>
                    )}
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project-links">
                    {project.repoUrl && (
                      <a
                        aria-label={`${project.name} ${siteCopy.navigation.github}`}
                        className="icon-link"
                        href={project.repoUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Github aria-hidden="true" size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        aria-label={`${project.name} demo`}
                        className="icon-link"
                        href={project.demoUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <ArrowUpRight aria-hidden="true" size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-problem">{project.problem}</p>
                <p className="project-description">{project.description}</p>
                <ul aria-label={`${project.name} technologies`} className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby={`${siteCopy.sections.education.id}-title`}
          className="content-section"
          id={siteCopy.sections.education.id}
        >
          <SectionHeading section={siteCopy.sections.education} />
          <div className="education-list">
            {education.map((entry) => (
              <article className="education-entry" key={entry.id}>
                <div className="education-entry-heading">
                  <div>
                    <h3>{entry.program}</h3>
                    <p>{entry.institution}</p>
                  </div>
                  <span className="education-dates">
                    {entry.start && <>{entry.start} – </>}
                    {entry.end}
                  </span>
                </div>
                {entry.coursework.length > 0 && (
                  <div className="coursework">
                    <h4>{siteCopy.labels.coursework}</h4>
                    <ul className="tag-list">
                      {entry.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="certifications">
            <h3>{siteCopy.labels.certifications}</h3>
            <div className="certification-groups">
              {certificationGroups.map(({ status, label }) => {
                const matchingCertifications = certifications.filter(
                  (certification) => certification.status === status,
                );

                return (
                  <section
                    aria-label={label}
                    className="certification-group"
                    key={status}
                  >
                    <h4>{label}</h4>
                    {matchingCertifications.length > 0 ? (
                      <ul className="certification-list">
                        {matchingCertifications.map((certification) => (
                          <li className="certification-entry" key={certification.id}>
                            <div>
                              {certification.placeholder && (
                                <span className="placeholder-badge">
                                  {siteCopy.labels.placeholder}
                                </span>
                              )}
                              <h5>{certification.name}</h5>
                              <p>{certification.issuer}</p>
                            </div>
                            {certification.date && <span>{certification.date}</span>}
                            {certification.credentialUrl && (
                              <a
                                aria-label={`${certification.name} credential`}
                                className="icon-link"
                                href={certification.credentialUrl}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <ArrowUpRight aria-hidden="true" size={18} />
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="empty-state">{siteCopy.labels.noCertifications}</p>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section
          aria-labelledby={`${siteCopy.sections.contact.id}-title`}
          className="content-section contact-section"
          id={siteCopy.sections.contact.id}
        >
          <SectionHeading section={siteCopy.sections.contact} />
          <div className="contact-links">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={17} />
              {siteCopy.labels.contactByEmail}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            {profile.github && (
              <a
                className="button button-secondary"
                href={profile.github}
                rel="noreferrer"
                target="_blank"
              >
                <Github aria-hidden="true" size={17} />
                {siteCopy.navigation.github}
              </a>
            )}
            {profile.linkedin && (
              <a
                className="button button-secondary"
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin aria-hidden="true" size={17} />
                {siteCopy.navigation.linkedin}
              </a>
            )}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a className="back-to-top" href="#home">
            <ArrowUp aria-hidden="true" size={16} />
            {siteCopy.labels.backToTop}
          </a>
        </div>
      </footer>
    </>
  );
}
