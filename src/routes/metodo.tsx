import { createFileRoute, Link } from "@tanstack/react-router";
import meetingImage from "@/assets/method-meeting.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método — Projetar Soluções" },
      {
        name: "description",
        content:
          "Como trabalhamos: escuta ativa, transparência total e entrega de valor real. Conheça o método humano por trás dos nossos projetos.",
      },
      { property: "og:title", content: "Método — Projetar Soluções" },
      {
        property: "og:description",
        content:
          "Parceria, não fornecedor. Veja como conduzimos cada projeto com calma, clareza e segurança.",
      },
    ],
  }),
  component: MetodoPage,
});

const steps = [
  {
    n: "01",
    t: "Escuta ativa",
    d: "Antes de qualquer linha de código, sentamos para entender seu negócio, sua equipe e o contexto real do desafio. Sem suposições.",
  },
  {
    n: "02",
    t: "Plano claro",
    d: "Traduzimos descobertas em um plano sem jargões: escopo, prazos e investimento explicados de forma que qualquer pessoa entenda.",
  },
  {
    n: "03",
    t: "Construção em parceria",
    d: "Você acompanha cada entrega em ciclos curtos. Ajustamos rotas com você, não para você.",
  },
  {
    n: "04",
    t: "Transparência total",
    d: "Relatórios diretos, código documentado e propriedade integral do que produzimos sempre suas. Sem dependência mágica.",
  },
  {
    n: "05",
    t: "Entrega humana",
    d: "Treinamos sua equipe, garantimos uma transição suave e seguimos por perto enquanto você precisar.",
  },
];

function MetodoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <header className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span
            className="text-xs uppercase tracking-widest text-primary mb-6 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Nosso método
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-secondary mb-8 text-balance">
            Tecnologia feita por{" "}
            <span
              className="italic font-normal text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              gente
            </span>
            , para gente.
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Acreditamos que projetos de software dão errado quando viram caixas
            pretas. Nosso método existe para devolver clareza, calma e controle
            ao seu lado da mesa.
          </p>
        </div>
        <img
          src={meetingImage}
          alt="Reunião de planejamento técnico"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-3xl outline outline-1 -outline-offset-1 outline-foreground/5"
        />
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-px bg-border border border-border">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-card p-10 grid md:grid-cols-[140px_1fr] gap-6 items-start hover:bg-accent/40 transition-colors"
            >
              <span
                className="text-primary text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ETAPA {s.n}
              </span>
              <div>
                <h2 className="text-2xl font-semibold mb-3">{s.t}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { k: "Sem surpresas", v: "Você sempre sabe onde estamos, o que vem a seguir e por quê." },
            { k: "Sem amarras", v: "Código, dados e documentação pertencem a você desde o primeiro dia." },
            { k: "Sem dor", v: "Cuidamos da complexidade técnica para que sua equipe siga focada no negócio." },
          ].map((item) => (
            <div key={item.k}>
              <h3
                className="text-lg font-semibold text-primary mb-2"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                {item.k}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-balance text-secondary">
            Pronto para experimentar uma jornada tranquila?
          </h2>
          <Link
            to="/contato"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full font-semibold mt-6 transition-transform hover:scale-105 active:scale-95"
          >
            Vamos começar
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}