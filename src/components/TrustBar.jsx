import { motion } from 'framer-motion';
import { ShieldCheck, Download, Star, Lock } from 'lucide-react';
import Container from './ui/Container';

const items = [
  { icon: Star, label: '248+ Famílias', sub: 'Avaliação 5 estrelas' },
  { icon: Lock, label: 'Pagamento Seguro', sub: 'SSL + criptografia' },
  { icon: Download, label: 'Download Imediato', sub: 'Acesso instantâneo' },
  { icon: ShieldCheck, label: 'Garantia 30 dias', sub: '100% do dinheiro de volta' },
];

export default function TrustBar() {
  return (
    <section className="bg-primary-950 py-6" aria-label="Selos de confiança">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-secondary-400" aria-hidden="true" />
              </div>
              <div>
                <p className="font-inter font-semibold text-sm text-white leading-tight">{item.label}</p>
                <p className="font-inter text-xs text-white/60 mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
