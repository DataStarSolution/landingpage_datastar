export default function Contact({ formData, setFormData, handleSubmit, formSent }) {
  const styles = {
    sectionAlt: { padding: "100px 5%", background: "rgba(255,255,255,0.02)" },
    contactLayout: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "start" },
    form: { background: "#0D1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "40px", maxWidth: 600 },
    input: { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#E8EAF0", fontSize: 14, outline: "none", marginBottom: 20 },
    label: { fontSize: 12, color: "rgba(232,234,240,0.5)", marginBottom: 6, display: "block", fontWeight: 600, textTransform: "uppercase" },
    infoItem: { display: "flex", flexDirection: "column", gap: 4, marginBottom: 28 },
    infoLabel: { fontSize: 11, color: "#00D4AA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" },
    infoVal: { fontSize: 15, color: "#E8EAF0" },
    whatsappLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "#25D366",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: 8,
      textDecoration: "none",
      fontWeight: 600,
      fontSize: 14,
      transition: "opacity 0.2s",
      marginTop: 8,
    },
  };

  return (
    <section id="contato" style={styles.sectionAlt}>
      <div className="contact-layout" style={styles.contactLayout}>
        <div>
          <div style={{ color: "#00D4AA", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>Contato</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 8 }}>Vamos conversar</h2>
          <p style={{ color: "rgba(232,234,240,0.55)", marginBottom: 48 }}>
            Conta pra gente o seu desafio. Nossa equipe entra em contato em até 1 dia útil.
          </p>

          {/* Bloco de informações de contato */}
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>E-mail</span>
            <span style={styles.infoVal}>comercial@datastarsolutions.com</span>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>WhatsApp</span>
            <span style={styles.infoVal}>+55 (16) 93300-8635</span>
            <a
              href="https://wa.me/5516933008635?text=Olá%20DataStar!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappLink}
            >
              💬 Falar pelo WhatsApp
            </a>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Localização</span>
            <span style={styles.infoVal}>Ribeirão Preto, SP — Remoto Brasil</span>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Horário</span>
            <span style={styles.infoVal}>Seg–Sáb, 9h–18h (BRT)</span>
          </div>
        </div>

        {/* Formulário (mantido) */}
        <form style={styles.form} onSubmit={handleSubmit}>
          {formSent ? (
            <div style={{ textAlign: "center", padding: "20px", color: "#00D4AA", fontWeight: 600 }}>
              ✅ Mensagem enviada! Retornaremos em breve.
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={styles.label}>Nome</label>
                  <input style={styles.input} placeholder="Seu nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                </div>
                <div>
                  <label style={styles.label}>E-mail</label>
                  <input style={styles.input} placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <label style={styles.label}>Empresa</label>
              <input style={styles.input} placeholder="Nome da empresa" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} />

              <label style={styles.label}>Serviço de interesse</label>
              <select style={{ ...styles.input, appearance: "none" }} value={formData.servico} onChange={(e) => setFormData({ ...formData, servico: e.target.value })}>
                <option value="" style={{ background: "#0D1120" }}>Selecione um serviço</option>
                <option value="analise" style={{ background: "#0D1120" }}>Análise de Dados</option>
                <option value="ia" style={{ background: "#0D1120" }}>Inteligência Artificial</option>
                <option value="automacao" style={{ background: "#0D1120" }}>Automação</option>
              </select>

              <label style={styles.label}>Mensagem</label>
              <textarea style={{ ...styles.input, minHeight: 120, resize: "vertical" }} placeholder="Descreva seu projeto..." value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })} />

              <button type="submit" style={{ width: "100%", background: "#00D4AA", color: "#080B14", border: "none", borderRadius: 10, padding: "14px", fontWeight: 700, cursor: "pointer" }}>
                Enviar mensagem →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}