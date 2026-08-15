import { motion } from 'framer-motion';
import { Check, Sprout } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import CTAButton from './ui/CTAButton';

const pontos = [
  'Linguagem simples e amorosa adaptada para crianças',
  'Fundamentado nas Escrituras Sagradas',
  'Histórias com lições morais e espirituais claras',
  'Atividades interativas ao final de cada história',
  'Ilustrações encantadoras em alta resolução',
  'PDF responsivo, otimizado para qualquer tela',
];

export default function Solucao() {
  return (
    <section
      id="solucao"
      className="py-20 md:py-28 bg-gray-50 overflow-hidden"
      aria-labelledby="solucao-titulo"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src="/ebook-cover.png"
                alt="Visualização do eBook Sementinha de Fé"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Stat badge */}
            <motion.div
              className="absolute -bottom-6 -right-2 lg:-right-8 z-20 bg-white rounded-2xl px-5 py-4 shadow-card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4, type: 'spring' }}
            >
              <p className="font-inter text-xs text-gray-500 mb-0.5">Quantidades de eBooks</p>
              <p className="font-lora font-bold text-primary-800 text-3xl">10</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-widest bg-primary-100 text-primary-700 border border-primary-200">
              A Solução
            </span>
            <h2
              id="solucao-titulo"
              className="font-lora font-bold text-gray-900 leading-tight text-balance mt-2"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Apresentamos o{' '}
              <span className="text-primary-800">Sementinha de Fé</span>
            </h2>

            <p className="mt-5 font-inter text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              Um conjunto de eBooks criado com amor e dedicação para a sua(s) criança(s).
              Cada história foi cuidadosamente elaborada para tocar o coração das crianças e deixar
              raízes profundas de fé.
            </p>

            <ul className="mt-8 space-y-3.5" role="list" aria-label="Características do eBook">
              {pontos.map((ponto) => (
                <li key={ponto} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cta-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-cta-600" aria-hidden="true" />
                  </span>
                  <span className="font-inter text-gray-700 text-sm leading-relaxed">{ponto}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <Sprout className="w-8 h-8 text-cta-600 flex-shrink-0" aria-hidden="true" />
              <p className="font-inter text-sm text-gray-500 italic">
                "Instrua a criança no caminho em que deve andar, e quando envelhecer não se desviará dele." — Provérbios 22:6
              </p>
            </div>

            <div className="mt-8">
              <CTAButton href="https://pay.hotmart.com/O106910150V" size="lg">
                Quero Plantar Essa Semente!
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
