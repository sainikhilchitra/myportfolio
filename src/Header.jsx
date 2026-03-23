import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [active, setActive] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("#home, #about, #skills, #journey, #projects, #contact");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header-logo">SNC.</div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <nav className={`header-categories ${isMenuOpen ? "open" : ""}`}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}