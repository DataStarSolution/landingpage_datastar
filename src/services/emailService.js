import emailjs from '@emailjs/browser';

// As variáveis de ambiente no Vite usam import.meta.env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_EMPRESA = import.meta.env.VITE_EMAILJS_TEMPLATE_EMPRESA;
const TEMPLATE_CLIENTE = import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENTE;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Inicializa o EmailJS com sua chave pública
emailjs.init(PUBLIC_KEY);

export const enviarEmailEmpresa = (dadosForm) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_EMPRESA, {
    from_name: dadosForm.nome,
    from_email: dadosForm.email,
    empresa: dadosForm.empresa,
    servico: dadosForm.servico,
    message: dadosForm.mensagem,
    current_time: new Date().toLocaleString('pt-BR'),
  });
};

export const enviarEmailCliente = (dadosForm) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_CLIENTE, {
    from_name: dadosForm.nome,
    from_email: dadosForm.email,
    empresa: dadosForm.empresa,
    servico: dadosForm.servico,
    message: dadosForm.mensagem,
    current_time: new Date().toLocaleString('pt-BR'),
  });
};