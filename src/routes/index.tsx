import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/tech-hero.jpg";
import meetingImage from "@/assets/partnership-macbook.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projetar Soluções — Software sem estresse, com presença humana" },
      {
        name: "description",
        content:
          "Desenvolvimento de software, design de interface e consultoria com clareza, calma e segurança. Ganhe tempo com um time que cuida de você.",
      },
      { property: "og:title", content: "Projetar Soluções — Tecnologia humana e segura" },
      {
        property: "og:description",
        content:
          "Soluções digitais robustas com a calma de quem domina o ofício. Sem jargões, com transparência total.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Levantamento de Requisitos", desc: "Traduzimos suas ideias em um plano técnico claro, sem você precisar falar a nossa língua." },
  { n: "02", title: "Design de Interface", desc: "Interfaces intuitivas que refletem sua marca e respeitam o tempo do seu usuário." },
  { n: "03", title: "Desenvolvimento de Software", desc: "Sistemas sob medida, do app mobile ao ERP, com código limpo e arquitetura escalável." },
  { n: "04", title: "Integração de Sistemas", desc: "Conectamos suas ferramentas para que os dados fluam sem retrabalho manual." },
  { n: "05", title: "Suporte & Manutenção", desc: "Acompanhamento contínuo para que sua solução continue confiável ao longo do tempo." },
  { n: "06", title: "Consultoria Técnica", desc: "Diagnósticos honestos para guiar sua empresa pelo melhor caminho tecnológico." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <header
        className="relative"
        style={{
          backgroundImage: "var(--pattern-digital)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-[1fr_400px] gap-12 items-end">
        <div className="animate-reveal">
          <span
            className="text-xs uppercase tracking-widest text-primary mb-6 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Tecnologia com presença
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-8 text-balance text-secondary">
            Do conceito ao crescimento.{" "}
            <span className="italic text-primary">
              Tecnologia completa
            </span>
            , sempre.
          </h1>
          <p className="max-w-md text-xl text-muted-foreground leading-relaxed text-pretty mb-10">
            Construímos soluções robustas com a calma de quem domina o ofício.
            Como um café entre amigos: direto ao ponto, sem jargões e com a
            segurança de um time que cuida do seu projeto como se fosse o nosso.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="https://wa.me/5583988126769"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground px-7 py-4 rounded-full font-semibold transition-transform hover:scale-[1.03] active:scale-95"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              Conversar com um especialista
            </a>
            <Link to="/servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Ver serviços →
            </Link>
          </div>
        </div>
        <div className="animate-reveal" style={{ animationDelay: "200ms" }}>
          <img
            src={heroImage}
            alt="Espaço de trabalho calmo com café e laptop"
            width={800}
            height={1000}
            className="w-full aspect-[4/5] object-cover rounded-2xl ring-1 ring-primary/15 shadow-xl shadow-primary/10"
          />
        </div>
        </div>
      </header>

      {/* Value bar */}
      <section className="border-y border-border bg-accent/30">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          {[
            { k: "Clareza", v: "Você entende cada decisão técnica, mesmo sem ser da área." },
            { k: "Tempo", v: "Metodologias ágeis que entregam valor sem sobrecarregar sua equipe." },
            { k: "Segurança", v: "Arquiteturas robustas pensadas para durar e proteger seus dados." },
          ].map((item) => (
            <div key={item.k} className="flex flex-col gap-2">
              <span
                className="text-xs uppercase tracking-widest text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.k}
              </span>
              <p className="text-foreground/80 leading-relaxed">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-secondary">
              Nossas frentes de atuação
            </h2>
            <span
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              06 ESPECIALIDADES
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-background p-10 hover:bg-accent/40 transition-colors"
              >
                <span
                  className="text-xs text-primary mb-4 block font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.n}
                </span>
                <h3 className="text-xl font-bold mb-3 text-secondary">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 md:order-1">
          <img
            src={meetingImage}
            alt="Reunião sobre planejamento técnico"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-3xl outline outline-1 -outline-offset-1 outline-foreground/5"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl max-w-[260px]">
            <p className="text-sm font-medium leading-snug">
              "Entregamos segurança porque ouvimos antes de codar."
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span
            className="text-xs uppercase tracking-widest text-primary mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Como trabalhamos
          </span>
          <h2 className="text-4xl font-black tracking-tight mb-8 text-secondary">
            Parceria, não fornecedor.
          </h2>
          <div className="space-y-10">
            {[
              { n: 1, t: "Escuta ativa", d: "Entendemos seu contexto antes de sugerir qualquer linha de código." },
              { n: 2, t: "Transparência total", d: "Relatórios sem jargões e progresso visível em cada etapa." },
              { n: 3, t: "Entrega de valor", d: "Treinamos sua equipe e garantimos uma transição suave." },
            ].map((step) => (
              <div key={step.n} className="flex gap-6">
                <div
                  className="flex-none size-8 rounded-full border border-primary text-primary grid place-items-center text-xs"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {step.n}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{step.t}</h4>
                  <p className="text-muted-foreground text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span
              className="text-xs uppercase tracking-widest text-primary mb-6 block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Por que escolher
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-balance text-secondary">
              Por que escolher a{" "}
              <span className="italic text-primary">
                Projetar
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos especialistas em transformar a forma como as empresas
              utilizam tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-20">
            {[
              {
                t: "Tecnologia Simples",
                d: "Soluções intuitivas que sua equipe consegue usar desde o primeiro dia.",
              },
              {
                t: "Agilidade Garantida",
                d: "Implementação rápida sem comprometer a qualidade ou segurança.",
              },
              {
                t: "Qualidade Premium",
                d: "Padrões internacionais em segurança, performance e confiabilidade.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-background p-10">
                <h3 className="text-xl font-bold mb-3 text-secondary">{item.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-10 border-t border-border pt-16">
            {[
              { n: "15+", l: "Anos de Experiência" },
              { n: "50+", l: "Projetos Concluídos" },
              { n: "100%", l: "Dedicados ao Sucesso" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-2">
                <span
                  className="text-5xl md:text-6xl font-black tracking-tighter"
                  style={{
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.n}
                </span>
                <span
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-border py-24" style={{ background: "var(--gradient-brand)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-xs uppercase tracking-widest text-primary-foreground/80 mb-6 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Quem confia
          </span>
          <blockquote
            className="text-3xl md:text-4xl font-medium italic leading-snug text-balance text-primary-foreground"
          >
            "A primeira vez que me senti seguro em um projeto de tecnologia.
            Eles explicam o porquê de cada decisão e respeitam o nosso tempo."
          </blockquote>
          <footer className="mt-8 text-sm text-primary-foreground/70">
            <span className="block font-semibold text-primary-foreground">
              Ricardo Almeida
            </span>
            Diretor de Operações
          </footer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary text-secondary-foreground py-32 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "var(--pattern-digital)", backgroundSize: "20px 20px" }}
        />
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-balance">
            Vamos conversar sobre o seu próximo passo?
          </h2>
          <p className="text-primary-foreground/70 mb-12 text-lg">
            O café fica por nossa conta. A solução técnica também.
          </p>
          <a
            href="https://wa.me/5583988126769"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Agendar uma conversa gratuita
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
