import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("#home");

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
      <nav className="header-categories">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}