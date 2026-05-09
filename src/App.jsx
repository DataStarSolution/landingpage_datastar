import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

// Importação dos componentes criados
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Dados da seção de regulamentos (mantidos inline)
const REGS = [
  {
    title: "Política de Privacidade",
    icon: "🔒",
    content:
      "Seus dados pessoais são tratados com total confidencialidade, conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018). Coletamos apenas informações necessárias para prestação dos serviços contratados. Você tem direito de acesso, correção, portabilidade e exclusão dos seus dados a qualquer momento.",
  },
  {
    title: "Termos de Serviço",
    icon: "📄",
    content:
      "Os serviços são prestados mediante contrato formal com SLA definido por projeto. Toda propriedade intelectual gerada durante o projeto pertence ao cliente após quitação integral. Cancelamentos devem ser comunicados com 30 dias de antecedência.",
  },
  {
    title: "Segurança da Informação",
    icon: "🛡️",
    content:
      "Adotamos criptografia AES-256 em repouso e TLS 1.3 em trânsito para todos os dados. Nossos processos seguem as melhores práticas do NIST Cybersecurity Framework e passam por auditoria semestral independente.",
  },
  {
    title: "Conformidade & Compliance",
    icon: "✅",
    content:
      "Operamos em conformidade com LGPD, GDPR (para clientes internacionais) e normas setoriais aplicáveis. Todos os colaboradores assinam NDA e passam por treinamento anual em segurança da informação.",
  },
];

// Componente AnimSection que aceita um ID e aplica animação de entrada
function AnimSection({ children, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [formSent, setFormSent] = useState(false);
  const [expandedReg, setExpandedReg] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
    servico: "",
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Monitoramento de scroll para destacar a seção ativa no menu
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "servicos", "projetos", "sobre", "regulamentos", "contato"];
      const scrollPosition = window.scrollY + 150;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // define a seção inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepara os dados no formato que o EmailJS espera
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.mensagem,
      empresa: formData.empresa,
      servico: formData.servico,
      current_time: new Date().toLocaleString('pt-BR'),
    };

    try {
      // 1. Envia para a empresa (você)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_EMPRESA,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Envia a confirmação para o cliente
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENTE,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormSent(true);
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        mensagem: "",
        servico: "",
      });
      setTimeout(() => setFormSent(false), 5000);
    } catch (error) {
      console.error("Erro no EmailJS:", error);
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
    }
  };

  // Estilos básicos para as seções inline (Regulamentos usa styles.section etc.)
  const styles = {
    section: { padding: "100px 5%" },
    label: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#00D4AA",
      marginBottom: 12,
    },
    sectionTitle: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "clamp(28px, 4vw, 48px)",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      margin: "0 0 16px",
    },
    sectionSub: {
      fontSize: 16,
      color: "rgba(232,234,240,0.55)",
      maxWidth: 540,
      lineHeight: 1.7,
      margin: "0 0 60px",
    },
    regCard: {
      background: "#0D1120",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12,
      overflow: "hidden",
    },
    regHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      cursor: "pointer",
      userSelect: "none",
    },
    regTitle: {
      fontWeight: 600,
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    regBody: {
      padding: "0 24px 20px",
      fontSize: 14,
      color: "rgba(232,234,240,0.65)",
      lineHeight: 1.8,
    },
  };

  return (
    <div
      style={{
        background: "#080B14",
        color: "#E8EAF0",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      <main>
        {/* Hero já deve ter id="hero" internamente */}
        <Hero scrollTo={scrollTo} />

        <AnimSection id="servicos">
          <Services />
        </AnimSection>

        <AnimSection id="projetos">
          <Projects />
        </AnimSection>

        <AnimSection id="sobre">
          <About />
        </AnimSection>

        {/* Seção de Regulamentos (mantida inline) */}
        <AnimSection id="regulamentos">
          <section style={styles.section}>
            <div style={styles.label}>Conformidade & Transparência</div>
            <h2 style={styles.sectionTitle}>Regulamentos</h2>
            <p style={styles.sectionSub}>
              Operamos com total transparência e em conformidade com as principais
              normas de proteção de dados.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                maxWidth: 760,
              }}
            >
              {REGS.map((r, i) => (
                <div key={i} style={styles.regCard}>
                  <div
                    style={styles.regHeader}
                    onClick={() =>
                      setExpandedReg(expandedReg === i ? null : i)
                    }
                  >
                    <div style={styles.regTitle}>
                      <span style={{ fontSize: 18 }}>{r.icon}</span>
                      {r.title}
                    </div>
                    <span
                      style={{
                        color: "#00D4AA",
                        fontSize: 20,
                        transition: "transform 0.2s",
                        transform:
                          expandedReg === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </div>
                  {expandedReg === i && (
                    <div style={styles.regBody}>{r.content}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </AnimSection>

        <AnimSection id="contato">
          <Contact
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            formSent={formSent}
          />
        </AnimSection>
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}