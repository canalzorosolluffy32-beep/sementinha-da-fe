import { motion } from 'framer-motion';
import { ShieldCheck, RotateCcw, Heart } from 'lucide-react';
import Container from './ui/Container';

export default function Garantia() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="garantia-titulo">
      <Container narrow>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="bg-gradient-to-br from-cta-50 to-white border-2 border-cta-200 rounded-3xl p-8 md:p-14 text-center"
        >
          {/* Seal */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className="w-32 h-32 rounded-full bg-cta-600 flex flex-col items-center justify-center shadow-cta"
                role="img"
                aria-label="Selo de garantia de 30 dias"
              >
                <ShieldCheck className="w-10 h-10 text-white mb-1" aria-hidden="true" />
                <span className="font-lora font-bold text-white text-lg leading-none">7</span>
                <span className="font-inter text-white/90 text-xs">dias</span>
              </div>
              <div
                className="absolute inset-0 rounded-full border-4 border-cta-300 scale-110 opacity-40"
                aria-hidden="true"
              />
            </div>
          </div>

          <h2
            id="garantia-titulo"
            className="font-lora font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="font-inter text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
            Experimente o eBook por <strong>7 dias completos</strong> sem qualquer risco. Se por
            qualquer motivo você não ficar 100% satisfeito — basta enviar um e-mail e devolvemos
            todo o seu investimento imediatamente, sem perguntas, sem burocracia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700 font-inter">
              <RotateCcw className="w-4 h-4 text-cta-600" aria-hidden="true" />
              Reembolso 100% sem burocracia
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-inter">
              <ShieldCheck className="w-4 h-4 text-cta-600" aria-hidden="true" />
              Sem perguntas ou justificativas
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-inter">
              <Heart className="w-4 h-4 text-cta-600" aria-hidden="true" />
              Risco zero para você
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
