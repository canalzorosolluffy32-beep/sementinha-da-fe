import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { depoimentos } from '../data/depoimentos';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gray-50" aria-labelledby="depoimentos-titulo">
      <Container>
        <SectionTitle
          badge="Depoimentos reais"
          title="O Que as Famílias Estão Dizendo"
          subtitle="Mais de 248 famílias já transformaram seus momentos em família com o Sementinha de Fé."
          id="depoimentos-titulo"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={dep.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary-200 mb-4 flex-shrink-0" aria-hidden="true" />

              {/* Stars */}
              <div className="flex mb-4" role="img" aria-label={`${dep.estrelas} estrelas`}>
                {[...Array(dep.estrelas)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-secondary-500 fill-secondary-500" aria-hidden="true" />
                ))}
              </div>

              {/* Text */}
              <p className="font-inter text-gray-700 text-sm leading-relaxed flex-1 italic">
                "{dep.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-inter font-bold text-sm flex-shrink-0 ${dep.cor}`}
                  aria-hidden="true"
                >
                  {dep.avatar}
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-900 text-sm">{dep.nome}</p>
                  <p className="font-inter text-gray-500 text-xs">{dep.cargo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-card border border-gray-100">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
              ))}
            </div>
            <p className="font-inter text-sm font-semibold text-gray-700">
              <span className="text-primary-800">248 famílias</span> avaliaram com 5 estrelas
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
