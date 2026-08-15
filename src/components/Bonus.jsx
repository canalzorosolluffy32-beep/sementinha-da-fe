import { motion } from 'framer-motion';
import { Gift, Check } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const bonus = [
  {
    id: 1,
    titulo: '50 Atividades Interativas Extras',
    descricao: 'Diferentes tipos de atividades para manter sua criança interessada e entretida com ensinamentos bíblicos.',
    valorAtual: 'GRÁTIS',
  },
  {
    id: 2,
    titulo: 'Histórias Ilustradas em Vídeo',
    descricao: 'Histórias bíblicas narradas com animações suaves para prender a atenção dos pequenos.',
    valorAtual: 'GRÁTIS',
  },
  {
    id: 3,
    titulo: '4 Orações Ilustradas Para Crianças',
    descricao: 'Prontas para imprimir e decorar o quarto do seu filho com orações simples e lindas.',
    valorAtual: 'GRÁTIS',
  },
];

export default function Bonus() {
  return (
    <section id="bonus" className="py-20 md:py-28 bg-white" aria-labelledby="bonus-titulo">
      <Container>
        <SectionTitle
          badge="Bônus exclusivos"
          title="Além do eBook, Você Recebe Estes Presentes"
          subtitle="Compre hoje e leve esses bônus especiais sem custo adicional."
          id="bonus-titulo"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {bonus.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`
                relative rounded-2xl p-6 border-2 flex flex-col
              `}
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary-100 flex items-center justify-center mb-5">
                <Gift className="w-6 h-6 text-secondary-600" aria-hidden="true" />
              </div>

              <h3 className="font-lora font-bold text-gray-900 text-base leading-snug mb-3 flex-1">
                {item.titulo}
              </h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6">
                {item.descricao}
              </p>

              <div className="mt-auto flex items-center gap-3">
                <span className="font-lora font-bold text-cta-600 text-lg">{item.valorAtual}</span>
                <Check className="w-4 h-4 text-cta-600 ml-auto" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total value banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-sm">
            🔥 47% de Desconto
          </div>
          <p className="font-inter text-sm text-primary-700 mb-1">Valor total de 10 Ebooks + 3 Bônus</p>
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="font-inter text-gray-500 text-lg line-through">R$ 209,00</span>
            <span className="font-lora font-bold text-primary-800 text-4xl">R$ 97,98</span>
          </div>
          <p className="font-inter text-sm text-secondary-600 font-semibold mt-1">ou 3x de R$ 32,66 sem juros</p>
          <p className="font-inter text-xs text-gray-500 mt-2">Aproveite enquanto o preço da coleção completa está em oferta 🌱</p>
        </motion.div>
      </Container>
    </section>
  );
}
