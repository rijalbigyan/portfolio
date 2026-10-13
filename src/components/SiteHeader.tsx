import { useEffect, useRef, useState } from "react";
import { FileText, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { siteCopy } from "../data/site";

const navigation = [
  { id: "home", label: siteCopy.navigation.home },
  { id: siteCopy.sections.about.id, label: siteCopy.sections.about.navLabel },
  { id: siteCopy.sections.skills.id, label: siteCopy.sections.skills.navLabel },
  { id: siteCopy.sections.projects.id, label: siteCopy.sections.projects.navLabel },
  { id: siteCopy.sections.education.id, label: siteCopy.sections.education.navLabel },
  { id: siteCopy.sections.contact.id, label: siteCopy.sections.contact.navLabel },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        const currentSection = visibleSections[0]?.target.id;
        if (currentSection) setActiveSection(currentSection);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
    if (isMenuOpen) menuButtonRef.current?.focus();
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a aria-label={`${profile.name} home`} className="site-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
          <span>{profile.name}</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? siteCopy.navigation.closeMenu : siteCopy.navigation.openMenu}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          aria-label={siteCopy.navigation.mainLabel}
          className={`site-nav${isMenuOpen ? " site-nav-open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map(({ id, label }) => (
            <a
              aria-current={activeSection === id ? "page" : undefined}
              className="nav-link"
              href={`#${id}`}
              key={id}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          {profile.github && (
            <a className="nav-link nav-social" href={profile.github} onClick={closeMenu}>
              <Github aria-hidden="true" size={16} />
              {siteCopy.navigation.github}
            </a>
          )}
          {profile.linkedin && (
            <a className="nav-link nav-social" href={profile.linkedin} onClick={closeMenu}>
              <Linkedin aria-hidden="true" size={16} />
              {siteCopy.navigation.linkedin}
            </a>
          )}
          {profile.resumeUrl && (
            <a
              className="button button-resume"
              href={profile.resumeUrl}
              onClick={closeMenu}
              rel="noreferrer"
              target="_blank"
            >
              <FileText aria-hidden="true" size={16} />
              {siteCopy.navigation.resume}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
