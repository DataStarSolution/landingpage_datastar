const TEAM = [
  { initials: "GN", name: "Gabriel Nogueira", role: "Data Analyst", color: "#ff9900", photo: "/team/gabriel.png"},
  { initials: "VH", name: "Victor Hugo", role: "Data Scientist", color: "#d6ff09", photo: "/team/victor.png" },
];

export default function About() {
  const styles = {
    sectionAlt: { padding: "100px 5%", background: "rgba(255,255,255,0.02)" },
    aboutLayout: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80, alignItems: "center" },
    teamGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 },
    teamCard: { background: "#0D1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "28px 24px", textAlign: "center" },
    avatar: (color) => ({ width: 64, height: 64, borderRadius: "50%", background: color + "20", border: `2px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: color, margin: "0 auto 16px", fontWeight: 700 }),
  };

  return (
    <section id="sobre" style={styles.sectionAlt}>
      <div className="about-layout" style={styles.aboutLayout}>
        <div>
          <div style={{ color: "#00D4AA", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>Quem somos</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 24 }}>Uma equipe obcecada por resultados</h2>
          <p style={{ fontSize: 16, color: "rgba(232,234,240,0.65)", lineHeight: 1.9, marginBottom: 24 }}>
            Fundada em 2026, a <strong style={{ color: "#00D4AA" }}>DataStar Solutions</strong> surgiu da iniciativa de dois jovens apaixonados por dados e IA...
          </p>
          {/* Valores aqui... */}
        </div>
        <div style={styles.teamGrid}>
          {TEAM.map((m, i) => (
            <div key={i} style={styles.teamCard}>
              {m.photo ? (
                <img src={m.photo} alt={m.name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: `2px solid ${m.color}40`, margin: "0 auto 16px", display: "block" }} />
              ) : (
                <div style={styles.avatar(m.color)}>{m.initials}</div>
              )}
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: "rgba(232,234,240,0.5)" }}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}