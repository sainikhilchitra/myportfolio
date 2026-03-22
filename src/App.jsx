import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Journey from './Journey';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return <div className="custom-cursor"></div>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="bg-dots"></div>
      <Header />
      <main>
        <div className="reveal"><Home /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Journey /></div>
        <div className="reveal"><Certifications /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Contact /></div>
      </main>
    </>
  );
}
