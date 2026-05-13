import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Projetar Soluções" },
      {
        name: "description",
        content:
          "Conte sobre o seu projeto. Respondemos rápido, sem jargões, e o café fica por nossa conta.",
      },
      { property: "og:title", content: "Contato — Projetar Soluções" },
      {
        property: "og:description",
        content:
          "Agende uma conversa gratuita com a Projetar Soluções e descubra um caminho técnico mais tranquilo.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <header className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <span
          className="text-xs uppercase tracking-widest text-primary mb-6 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Contato
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-secondary mb-8 text-balance max-w-4xl">
          Conte sobre o seu{" "}
          <span
            className="italic font-normal text-primary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            projeto
          </span>
          .
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Resposta em até um dia útil. Sem formulários intermináveis, sem
          script de vendas — só uma conversa honesta.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-[1fr_1.2fr] gap-16">
        <aside className="space-y-10">
          <div>
            <h3
              className="text-xs uppercase tracking-widest text-primary mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              E-mail
            </h3>
            <a
              href="mailto:contato@projetarsolucoes.tec.br"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              contato@projetarsolucoes.tec.br
            </a>
          </div>
          <div>
            <h3
              className="text-xs uppercase tracking-widest text-primary mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Atendimento
            </h3>
            <p className="text-foreground/80">
              Segunda a sexta<br />
              09h às 18h (horário de Brasília)
            </p>
          </div>
          <div>
            <h3
              className="text-xs uppercase tracking-widest text-primary mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Como funciona
            </h3>
            <ol className="space-y-3 text-foreground/80">
              <li>1. Você nos conta o contexto.</li>
              <li>2. Marcamos uma conversa de até 30 minutos.</li>
              <li>3. Enviamos um caminho recomendado, mesmo que não seja com a gente.</li>
            </ol>
          </div>
        </aside>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const get = (id: string) =>
              (f.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? "";
            const nome = get("nome");
            const empresa = get("empresa");
            const email = get("email");
            const telefone = get("telefone");
            const mensagem = get("mensagem");
            const subject = `Novo contato pelo site — ${nome}${empresa ? ` (${empresa})` : ""}`;
            const body = `Nome: ${nome}\nEmpresa: ${empresa}\nE-mail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`;
            window.location.href = `mailto:sheylainfo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
          className="bg-card border border-border rounded-2xl p-10 space-y-6"
        >
          {sent ? (
            <div className="py-12 text-center space-y-4">
              <span
                className="text-xs uppercase tracking-widest text-primary block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Recebemos
              </span>
              <h3 className="text-2xl font-semibold">Obrigado pelo contato!</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Em breve uma pessoa de verdade vai responder com calma e atenção.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Nome" id="nome" />
                <Field label="Empresa" id="empresa" />
              </div>
              <Field label="E-mail" id="email" type="email" />
              <Field label="Telefone (opcional)" id="telefone" type="tel" required={false} />
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Sobre o projeto
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={5}
                  placeholder="Pode contar com suas palavras — a gente traduz depois."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold transition-transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-primary/20"
              >
                Enviar mensagem
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}