import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "regulamentos", label: "Regulamentos" },
  { id: "contato", label: "Contato" },
];

export default function Navbar({ activeSection, scrollTo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInCenter {
          from { opacity: 0; transform: translate(-50%, calc(-50% - 10px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes drawerSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── NAVBAR BASE ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 5%;
          height: 64px;
          background: rgba(8,11,20,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* ── LOGO ── */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          flex-shrink: 0;
          opacity: 0;
          animation: fadeIn 0.5s ease 0s forwards;
          z-index: 1;
        }
        .navbar-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
        }
        .navbar-logo-text span:last-child { color: #00D4AA; }
        .navbar-logo img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        /* ── DESKTOP: links centralizados ── */
        .navbar-links-desktop {
          position: absolute;
          left: 50%;
          top: 50%;
          opacity: 0;
          animation: fadeInCenter 0.5s ease 0.2s forwards;
        }
        .navbar-links-desktop ul {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .navbar-links-desktop li {
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          padding-bottom: 2px;
          white-space: nowrap;
        }

        /* ── MOBILE: hamburguer ── */
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          margin-left: auto;
          cursor: pointer;
          padding: 8px;
          z-index: 1;
          background: none;
          border: none;
          opacity: 0;
          animation: fadeIn 0.5s ease 0.2s forwards;
        }
        .navbar-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        /* Animação hamburguer → X */
        .navbar-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar-hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── MOBILE DRAWER ── */
        .navbar-drawer {
          display: none;
          position: fixed;
          top: 64px;
          left: 0; right: 0;
          background: rgba(8,11,20,0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 8px 0 20px;
          z-index: 99;
          animation: drawerSlideIn 0.25s ease forwards;
        }
        .navbar-drawer ul {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
        }
        .navbar-drawer li {
          padding: 14px 6%;
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-drawer li:last-child { border-bottom: none; }
        .navbar-drawer li:hover { background: rgba(0,212,170,0.06); }
        .drawer-arrow {
          font-size: 18px;
          color: rgba(255,255,255,0.25);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .navbar-links-desktop { display: none; }
          .navbar-hamburger      { display: flex; }
          .navbar-drawer.open    { display: block; }
        }
      `}</style>

      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNav("hero")}>
          <img src="/og-image.png" alt="DataStar Solutions" />
          <span className="navbar-logo-text">
            <span>DataStar</span>
            <span>Solutions</span>
          </span>
        </div>

        {/* ── DESKTOP: links centralizados ── */}
        <div className="navbar-links-desktop">
          <ul>
            {NAV_LINKS.map((l) => (
              <li
                key={l.id}
                onClick={() => handleNav(l.id)}
                style={{
                  color: activeSection === l.id ? "#00D4AA" : "rgba(232,234,240,0.6)",
                  borderBottom: activeSection === l.id
                    ? "1px solid #00D4AA"
                    : "1px solid transparent",
                }}
              >
                {l.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── MOBILE: botão hamburguer ── */}
        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── MOBILE: drawer (fora do <nav> para cobrir a tela toda) ── */}
      <div className={`navbar-drawer ${menuOpen ? "open" : ""}`}>
        <ul>
          {NAV_LINKS.map((l) => (
            <li
              key={l.id}
              onClick={() => handleNav(l.id)}
              style={{
                color: activeSection === l.id ? "#00D4AA" : "rgba(232,234,240,0.8)",
              }}
            >
              {l.label}
              <span className="drawer-arrow">›</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}