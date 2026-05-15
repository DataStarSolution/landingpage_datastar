import { useState, useRef } from "react";  

export default function Hero({ scrollTo }) {

  const heroRef = useRef(null);

  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;

    const div = heroRef.current;

    const rect = div.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    div.style.setProperty("--mouse-x", `${x}px`);
    div.style.setProperty("--mouse-y", `${y}px`);
  }

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const styles = {
    hero: {
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      padding: "clamp(80px, 15vh, 120px) 5% 80px",
      position: "relative", 
      overflow: "hidden", 
      textAlign: "center",
      backgroundColor: "#020617",
      color: "white",
    },
    heroBg: {
      position: "absolute", 
      inset: 0,
      // background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,212,170,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(91,127,255,0.06) 0%, transparent 60%)",
      pointerEvents: "none",
      zIndex: 1,
    },
    heroGrid: {
      position: "absolute", 
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      backgroundSize: "50px 50px", 
      pointerEvents: "none",
      zIndex: 0,
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      style={styles.hero}
      onMouseMove={handleMouseMove} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>

      <div 
        style={{
          ...styles.heroBg,
          opacity: opacity, 
          transition: "opacity 0.3s ease",
          background: "radial-gradient(1500px circle at var(--mouse-x) var(--mouse-y), rgba(31, 102, 133, 0.15), transparent 90%)",
        }} 
      />

        <div style={styles.heroGrid} />

          <div 
          className="hero-content" 
          style={{ 
            position: "relative",
            zIndex: 10,
            animation: "fadeIn 0.9s ease forwards" 
          }}>

            <div 
              className="badge" 
              style={{
                display: "inline-flex", 
                alignItems: "center", 
                gap: 8, 
                background: "rgba(0,212,170,0.1)",
                border: "1px solid rgba(0,212,170,0.3)", 
                borderRadius: 100, 
                padding: "6px 16px",
                fontSize: 12, 
                color: "#00D4AA", 
                textTransform: "uppercase", 
                fontWeight: 600, 
                marginBottom: 32,
                letterSpacing: "0.05em",
              }}>

              <span 
                className="pulse" 
                style={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: "50%", 
                  background: "#00D4AA",
                  boxShadow: "0 0 10px #00D4AA",
                }} 
              />
              Dados que movem negócios

          </div>

            <h1 
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif", 
                fontSize: "clamp(40px, 8vw, 80px)", 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: "-0.04em", 
                margin: "0 auto 24px",
                maxWidth: "900px", 
              }}
            >
              Transforme dados em <br />
              <span style={{ color: "#00D4AA" }}>
                vantagem 
              </span>{" "}
              competitiva
            </h1>

            <p 
              style={{ 
                fontSize: "clamp(16px, 1.5vw, 19px)", 
                color: "rgba(232,234,240,0.6)", 
                maxWidth: 600, 
                lineHeight: 1.7, 
                margin: "0 auto 40px" 
              }}
            >
              Da engenharia de dados à IA — entregamos soluções completas para empresas que querem decidir melhor, mais rápido.
            </p>

        <div 
          style={{ 
            display: "flex", 
            gap: 16, 
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

              <button 
                className="btn-primary" 
                style={{
                  padding: "12px 28px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => scrollTo("servicos")}
              >
                Nossos serviços
              </button>

              <button 
                className="btn-outline" 
                style={{
                  padding: "12px 28px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "white",
                }}
                onClick={() => scrollTo("projetos")}
              >
                Ver projetos
              </button>

        </div>

      </div>

    </section>
  );
}