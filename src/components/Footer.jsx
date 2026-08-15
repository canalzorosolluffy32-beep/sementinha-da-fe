import { Mail, Sprout } from 'lucide-react';

// Custom Instagram SVG (Instagram not available in this lucide-react build)
function InstagramIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor"/>
    </svg>
  );
}
import Container from './ui/Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 pt-14 pb-8" role="contentinfo">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-secondary-400" aria-hidden="true" />
              </div>
              <span className="font-lora font-bold text-white text-lg">Sementinha de Fé</span>
            </div>
            <p className="font-inter text-white/60 text-sm leading-relaxed max-w-xs">
              Histórias bíblicas encantadoras para plantar a fé no coração das crianças.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Links
            </h3>
            <nav aria-label="Rodapé — navegação">
              <ul className="space-y-2.5" role="list">
                {[
                  { label: 'Sobre o eBook', href: '#solucao' },
                  { label: 'Benefícios', href: '#beneficios' },
                  { label: 'Depoimentos', href: '#depoimentos' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Comprar Agora', href: '#comprar' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contato
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="https://instagram.com/sementinhadefe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-inter text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  aria-label="Instagram do Sementinha de Fé (abre em nova aba)"
                >
                  <InstagramIcon className="w-4 h-4 flex-shrink-0" />
                  @sementinhadefe
                </a>
              </li>
              <li>
                <a
                  href="mailto:sementinhadafe_contato@outlook.com"
                  className="flex items-center gap-2.5 font-inter text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  aria-label="E-mail de contato"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  sementinhadafe_contato@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40 text-center sm:text-left">
            © {year} Sementinha de Fé. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/politica-de-privacidade"
              className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-uso"
              className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
