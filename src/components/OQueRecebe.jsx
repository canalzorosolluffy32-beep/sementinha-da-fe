import { motion } from 'framer-motion';
import { FileText, Smartphone, Monitor, Download, Infinity, Star } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const itens = [
  { icon: FileText, texto: 'Arquivo PDF de alta qualidade' },
  { icon: Smartphone, texto: 'Compatível com celular e tablet' },
  { icon: Monitor, texto: 'Compatível com computador e leitores de PDF' },
  { icon: Download, texto: 'Download imediato após a compra' },
  { icon: Infinity, texto: 'Acesso vitalício — seu arquivo para sempre' },
  { icon: Star, texto: 'Ilustrações encantadoras em alta resolução' },
];

export default function OQueRecebe() {
  return (
    <section className="py-20 md:py-28 bg-primary-950 overflow-hidden" aria-labelledby="recebe-titulo">
      <Container>
        <SectionTitle
          badge="O que você recebe"
          title="Tudo Que Você Precisa em Um Único Arquivo"
          subtitle="Simples, prático e completo. Nada de complicação — só você e seu filho com a melhor ferramenta espiritual."
          light
          id="recebe-titulo"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {itens.map((item, i) => (
            <motion.div
              key={item.texto}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="flex items-center gap-4 bg-white/8 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-secondary-400" aria-hidden="true" />
              </div>
              <p className="font-inter text-sm font-medium text-white/90 leading-snug">{item.texto}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
