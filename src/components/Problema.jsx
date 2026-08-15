import { motion } from 'framer-motion';
import { AlertCircle, Brain, HeartCrack } from 'lucide-react';
import Container from './ui/Container';
import Card from './ui/Card';
import SectionTitle from './ui/SectionTitle';

const dores = [
  {
    icon: HeartCrack,
    titulo: 'Falta de tempo para educar na fé',
    descricao:
      'A rotina agitada torna difícil encontrar momentos de qualidade para ensinar valores espirituais às crianças. O dia passa e a oportunidade também.',
    cor: 'text-rose-500 bg-rose-50',
  },
  {
    icon: Brain,
    titulo: 'Conteúdo complexo demais para crianças',
    descricao:
      'Muitos materiais bíblicos usam linguagem adulta, perdendo completamente o interesse e a compreensão das crianças. Resultado: tédio e desinteresse.',
    cor: 'text-amber-500 bg-amber-50',
  },
  {
    icon: AlertCircle,
    titulo: 'Influências negativas em todo lugar',
    descricao:
      'Telas, jogos e conteúdos sem valores disputam a atenção das crianças. Se não plantarmos boas sementes primeiro, outros o farão.',
    cor: 'text-violet-500 bg-violet-50',
  },
];

export default function Problema() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="problema-titulo">
      <Container>
        <SectionTitle
          badge="Você se identifica?"
          title="Educar na Fé Nunca Foi Tão Difícil"
          subtitle="Todo pai quer ver seus filhos crescer com valores sólidos — mas a realidade moderna coloca obstáculos reais no caminho."
          id="problema-titulo"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {dores.map((dor, i) => (
            <motion.div
              key={dor.titulo}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
            >
              <Card className="h-full flex flex-col">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${dor.cor}`}>
                  <dor.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-lora font-bold text-gray-900 text-lg mb-3 leading-snug">
                  {dor.titulo}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed flex-1">
                  {dor.descricao}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Transition bridge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-14 font-lora italic text-primary-800 text-lg md:text-xl max-w-2xl mx-auto"
        >
          "A fé vem pelo ouvir. Que seus filhos ouçam histórias que transformam."
        </motion.p>
      </Container>
    </section>
  );
}
