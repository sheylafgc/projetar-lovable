import { Link } from "@tanstack/react-router";
import logo from "@/assets/projetar-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <img
            src={logo}
            alt="Projetar Soluções Tecnológicas"
            className="h-14 w-auto mb-4 brightness-0 invert"
            width={400}
            height={120}
          />
          <p className="text-background/60 text-sm leading-relaxed max-w-xs">
            Tecnologia completa, ágil e de qualidade para sua empresa crescer.
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
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-background/10 text-xs text-background/40">
        <p>© {new Date().getFullYear()} Projetar Soluções. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}