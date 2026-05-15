export default function Footer({ scrollTo }) {
  const styles = {
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      background: "#080B14",
    },
    logo: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: 18,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    footerText: { fontSize: 13, color: "rgba(232,234,240,0.35)" },
    links: { display: "flex", gap: 24 }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>
        DataStar
        <span style={{ color: "#00D4AA" }}>Solutions</span>
      </div>
      <div style={styles.footerText}>
        © 2026 DataStar Solutions. Todos os direitos reservados.
      </div>
      <div style={styles.links}>
        {["Privacidade", "Termos", "Cookies"].map((t) => (
          <span 
            key={t} 
            style={{ fontSize: 12, color: "rgba(232,234,240,0.3)", cursor: "pointer" }} 
            onClick={() => scrollTo("regulamentos")}
          >
            {t}
          </span>
        ))}
      </div>
    </footer>
  );
}