export default function Hero({ scrollTo }) {
  const styles = {
    hero: {
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: "120px 5% 80px",
      position: "relative", overflow: "hidden", textAlign: "center",
    },
    heroBg: {
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,212,170,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(91,127,255,0.06) 0%, transparent 60%)",
      pointerEvents: "none",
    },
    heroGrid: {
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      backgroundSize: "60px 60px", pointerEvents: "none",
    }
  };

  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.heroBg} />
      <div style={styles.heroGrid} />
      <div className="hero-content" style={{ animation: "fadeIn 0.9s ease forwards" }}>
        <div className="badge" style={{
          display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,212,170,0.1)",
          border: "1px solid rgba(0,212,170,0.3)", borderRadius: 100, padding: "4px 14px",
          fontSize: 12, color: "#00D4AA", textTransform: "uppercase", fontWeight: 600, marginBottom: 28
        }}>
          <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00D4AA" }} />
          Dados que movem negócios
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 24px" }}>
          Transforme dados em <span style={{ color: "#00D4AA" }}>vantagem</span> competitiva
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(232,234,240,0.6)", maxWidth: 580, lineHeight: 1.7, margin: "0 auto 40px" }}>
          Da engenharia de dados à IA — entregamos soluções completas para empresas que querem decidir melhor, mais rápido.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => scrollTo("servicos")}>Nossos serviços</button>
          <button className="btn-outline" onClick={() => scrollTo("projetos")}>Ver projetos</button>
        </div>
      </div>
    </section>
  );
}