import { Link } from "@tanstack/react-router";
import logo from "@/assets/projetar-logo.png";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Projetar Soluções Tecnológicas — Início" className="flex items-center">
          <img
            src={logo}
            alt="Projetar Soluções Tecnológicas"
            className="h-12 w-auto"
            width={400}
            height={120}
          />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link to="/servicos" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Serviços
          </Link>
          <Link to="/metodo" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Método
          </Link>
          <a
            href="https://wa.me/5583988126769"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
          >
            Falar com a Projetar
          </a>
        </div>
      </div>
    </nav>
  );
}