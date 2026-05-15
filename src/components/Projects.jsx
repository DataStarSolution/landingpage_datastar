const PROJECTS = [
  {
    name: "Previsão de Churn",
    client: "Fintech · 2025",
    desc: "Redução de 38% na taxa de churn com modelo preditivo baseado em comportamento transacional.",
    metric: "−38% churn",
    color: "#00D4AA",
  },
  {
    name: "Pipeline de Dados em Tempo Real",
    client: "E-commerce · 2025",
    desc: "Arquitetura event-driven processando 2M eventos/dia com latência abaixo de 200ms.",
    metric: "2M eventos/dia",
    color: "#5B7FFF",
  },
  {
    name: "Assistente IA para Atendimento",
    client: "Saúde · 2025",
    desc: "LLM fine-tuned que automatizou 60% dos tickets de suporte sem perda de CSAT.",
    metric: "60% automação",
    color: "#FF6B6B",
  },
  {
    name: "Bot WhatsApp de Cobrança",
    client: "Financeira · 2026",
    desc: "Automação de cobranças e avisos de pagamento via WhatsApp integrado ao ERP. Taxa de recuperação de inadimplência de 42%.",
    metric: "+42% recuperação",
    color: "#25D366",
  },
  {
    name: "Monitoramento de Preços",
    client: "Varejo · 2026",
    desc: "Robô de web scraping monitorando 50k SKUs de concorrentes em tempo real com alertas automáticos por e-mail.",
    metric: "50k SKUs",
    color: "#AA6BFF",
  },
  {
    name: "RAG Corporativo Jurídico",
    client: "Jurídico · 2025",
    desc: "IA treinada com 10k contratos jurídicos para consulta instantânea, extração de cláusulas e geração de resumos.",
    metric: "10k contratos",
    color: "#FFB347",
  },
];

export default function Projects() {
  const styles = {
    sectionAlt: { padding: "100px 5%", background: "rgba(255,255,255,0.02)" },
    grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 },
    projectCard: { background: "#0D1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "24px", display: "flex", flexDirection: "column", gap: 12 },
    metric: (color) => ({ alignSelf: "flex-start", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: color + "15", color: color, border: `1px solid ${color}30` }),
  };

  return (
    <section id="projetos" style={styles.sectionAlt}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00D4AA", marginBottom: 12 }}>Casos de Sucesso</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 16 }}>Projetos realizados</h2>
      <p style={{ fontSize: 16, color: "rgba(232,234,240,0.55)", maxWidth: 540, lineHeight: 1.7, margin: "0 0 60px" }}>Resultados concretos em empresas de diferentes setores e tamanhos.</p>
      <div style={styles.grid3}>
        {PROJECTS.map((p, i) => (
          <div key={i} style={styles.projectCard}>
            <div style={{ fontSize: 12, color: "rgba(232,234,240,0.4)" }}>{p.client}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18 }}>{p.name}</div>
            <p style={{ fontSize: 13, color: "rgba(232,234,240,0.6)", lineHeight: 1.6 }}>{p.desc}</p>
            <span style={styles.metric(p.color)}>{p.metric}</span>
          </div>
        ))}
      </div>
    </section>
  );
}