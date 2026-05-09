import { useState } from "react";

const NAV_LINKS = [
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "regulamentos", label: "Regulamentos" },
  { id: "contato", label: "Contato" },
];

export default function Navbar({ activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%", height: 64,
      background: "rgba(8,11,20,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    },
    logo: {
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20,
      color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
    },
    navLink: (active) => ({
      fontSize: 13, fontWeight: 500,
      color: active ? "#00D4AA" : "rgba(232,234,240,0.6)",
      cursor: "pointer", transition: "all 0.2s",
      textTransform: "uppercase", letterSpacing: "0.02em",
      borderBottom: active ? "1px solid #00D4AA" : "1px solid transparent",
      paddingBottom: 2,
    }),
    ctaBtn: {
      background: "#00D4AA", color: "#080B14", border: "none", borderRadius: 8,
      padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer",
      transition: "transform 0.15s",
    }
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.logo} onClick={() => scrollTo("hero")}>
          <span style={{ color: "#00D4AA", fontSize: 22 }}>◆</span>
          <span>DataStar <span style={{ color: "#00D4AA" }}>Solutions</span></span>
        </div>
        <ul className="nav-links" style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {NAV_LINKS.map((l) => (
            <li key={l.id} style={styles.navLink(activeSection === l.id)} onClick={() => scrollTo(l.id)}>
              {l.label}
            </li>
          ))}
        </ul>
        <button style={styles.ctaBtn} onClick={() => scrollTo("contato")}>Fale conosco</button>
      </nav>
      {/* Menu Mobile */}
      <div style={{
        position: "fixed", top: 64, left: 0, right: 0, background: "#080B14",
        display: menuOpen ? "flex" : "none", flexDirection: "column", padding: "20px 5%", gap: 20, zIndex: 99
      }}>
        {NAV_LINKS.map((l) => (
          <span key={l.id} style={{ color: activeSection === l.id ? "#00D4AA" : "#E8EAF0", cursor: "pointer" }} onClick={() => { scrollTo(l.id); setMenuOpen(false); }}>{l.label}</span>
        ))}
      </div>
    </>
  );
}