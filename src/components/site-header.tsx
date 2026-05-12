import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-bold tracking-tight text-xl">PROJETAR</span>
          <span
            className="text-primary text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            .SOLUÇÕES
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link to="/servicos" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Serviços
          </Link>
          <Link to="/metodo" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Método
          </Link>
          <Link to="/contato" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}