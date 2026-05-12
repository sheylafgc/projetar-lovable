import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="font-bold tracking-tight text-lg">PROJETAR</span>
            <span className="text-primary text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              .SOLUÇÕES
            </span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed max-w-xs">
            Engenharia de software com alma. Tecnologia simples, ágil e de qualidade para sua empresa.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-background/40 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-background/80 hover:text-primary transition-colors">Início</Link></li>
            <li><Link to="/servicos" className="text-background/80 hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link to="/metodo" className="text-background/80 hover:text-primary transition-colors">Método</Link></li>
            <li><Link to="/contato" className="text-background/80 hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-background/40 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            Contato
          </h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li>contato@projetarsolucoes.tec.br</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-background/10 text-xs text-background/40 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Projetar Soluções. Todos os direitos reservados.</p>
        <p>Feito com calma, em parceria.</p>
      </div>
    </footer>
  );
}