import { useState } from "react";
import { Cloud, Brain, Database, BarChart3 } from "lucide-react";

const SERVICES = [
  { icon: <Cloud size={24} />, title: "Automação com WhatsApp", color: "#25D366", category: "automacao", tags: ["Chatbots", "ERP"], desc: "Bots de atendimento e agendamento integrados." },
  { icon: <Brain size={24} />, title: "IA com Documentos (RAG)", color: "#AA6BFF", category: "ia", tags: ["RAG", "LLM"], desc: "IAs que aprendem com manuais e PDFs." },
  { icon: <BarChart3 size={24} />, title: "Análise de Dados & BI", color: "#00D4AA", category: "dados", tags: ["Power BI", "SQL"], desc: "Dashboards e insights estratégicos." },
  { icon: <Database size={24} />, title: "Data Warehouse & ETL", color: "#FF6B6B", category: "dados", tags: ["ETL", "Data Warehouse"], desc: "Organização e integração de dados." },
];

export default function Services() {
  const [cat, setCat] = useState("all");

  return (
    <section id="servicos" style={{ padding: "100px 5%" }}>

      <div style={{ color: "#00D4AA", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>
        O que fazemos
      </div>

      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 40 }}>Serviços em Dados e IA</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>

        {SERVICES.filter(s => cat === "all" || s.category === cat).map((s, i) => (
          <div key={i} className="card" style={{

            background: "#0D1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16,
            padding: 28, position: "relative", overflow: "hidden", transition: "transform 0.3s"
          }}>
            <div style={{ height: 3, background: s.color, position: "absolute", top: 0, left: 0, right: 0 }} />
            <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: "rgba(232,234,240,0.6)", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {s.tags.map(t => (
                <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: s.color + "15", color: s.color, border: `1px solid ${s.color}30` }}>{t}</span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}