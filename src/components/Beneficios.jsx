import { motion } from 'framer-motion';
import { Heart, BookOpen, Star, Shield, Smartphone, Download } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { beneficios } from '../data/beneficios';

const iconMap = { Heart, BookOpen, Star, Shield, Smartphone, Download };

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white" aria-labelledby="beneficios-titulo">
      <Container>
        <SectionTitle
          badge="Por que escolher"
          title="6 Razões Para Sua Criança Ler o Sementinha de Fé"
          subtitle="Cada detalhe foi pensado para o aprendizado e entretenimento das crianças."
          id="beneficios-titulo"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {beneficios.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300 flex items-center justify-center mb-5">
                    {Icon && (
                      <Icon
                        className="w-7 h-7 text-primary-700 group-hover:text-primary-900 transition-colors duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-lora font-bold text-gray-900 text-lg mb-3 leading-snug">
                    {b.titulo}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {b.descricao}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
