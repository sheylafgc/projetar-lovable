import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Projetar Soluções" },
      {
        name: "description",
        content:
          "Levantamento de requisitos, design de interface, desenvolvimento de software, integração de sistemas, suporte e consultoria — com clareza e parceria.",
      },
      { property: "og:title", content: "Serviços — Projetar Soluções" },
      {
        property: "og:description",
        content:
          "Seis frentes de atuação para sua empresa prosperar no cenário digital sem dor de cabeça.",
      },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    n: "01",
    title: "Levantamento de Requisitos",
    desc: "Sabemos a dificuldade de descrever ideias em termos técnicos. Conduzimos uma consultoria que escuta, identifica oportunidades e desenha estratégias eficazes para o seu negócio.",
    deliverables: ["Workshops de descoberta", "Mapeamento de processos", "Documento técnico claro"],
  },
  {
    n: "02",
    title: "Design de Interface",
    desc: "Criamos interfaces intuitivas, atrativas e funcionais que refletem a identidade da sua marca e atendem o seu público — colaborando lado a lado com sua equipe.",
    deliverables: ["Pesquisa com usuários", "Protótipos navegáveis", "Design System"],
  },
  {
    n: "03",
    title: "Desenvolvimento de Software",
    desc: "Soluções sob medida que atendem às necessidades específicas da sua empresa — de aplicativos móveis a sistemas empresariais complexos, com código limpo e escalável.",
    deliverables: ["Web e mobile", "Arquitetura escalável", "Testes automatizados"],
  },
  {
    n: "04",
    title: "Integração de Sistemas",
    desc: "Conectamos as ferramentas que você já usa para que os dados fluam sem retrabalho manual, eliminando silos e aumentando a produtividade da operação.",
    deliverables: ["APIs e webhooks", "ETL & sincronização", "Monitoramento contínuo"],
  },
  {
    n: "05",
    title: "Suporte & Manutenção",
    desc: "Acompanhamento contínuo para garantir que a sua solução continue confiável, segura e evoluindo junto com o seu negócio ao longo do tempo.",
    deliverables: ["SLA transparente", "Evolução incremental", "Atendimento humano"],
  },
  {
    n: "06",
    title: "Consultoria Técnica",
    desc: "Diagnósticos honestos e orientação estratégica para guiar sua empresa pelas melhores escolhas de tecnologia, evitando desperdício de tempo e investimento.",
    deliverables: ["Auditoria técnica", "Roadmap de produto", "Mentoria de times"],
  },
];

function ServicosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <header className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <span
          className="text-xs uppercase tracking-widest text-primary mb-6 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Serviços
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-secondary mb-8 text-balance max-w-4xl">
          Como podemos te{" "}
          <span
            className="italic font-normal text-primary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ajudar
          </span>
          ?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Explore como nossas seis frentes de atuação podem destravar a próxima
          etapa da sua empresa — sempre com parceria, transparência e o cuidado
          de quem entende o seu contexto.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="bg-card p-10 hover:bg-accent/40 transition-colors"
            >
              <span className="text-xs text-primary mb-4 block font-semibold">
                {s.n}
              </span>
              <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-sm flex items-center gap-3 text-foreground/80"
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 text-center" style={{ backgroundColor: "#3f0082" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-balance text-background">
            Não sabe por onde começar?
          </h2>
          <p className="text-background/60 mb-10">
            Faz parte do processo. Marque uma conversa e mapeamos juntos o
            próximo passo certo para o seu momento.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Falar com a Projetar
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}