import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { faq } from '../data/faq';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-trigger-${item.id}`}
      >
        <span className="font-lora font-bold text-gray-900 text-base leading-snug pr-2">
          {item.pergunta}
        </span>
        <span
          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-primary-800 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          aria-hidden="true"
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="h-px bg-gray-100 mb-4" aria-hidden="true" />
              <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.resposta}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50" aria-labelledby="faq-titulo">
      <Container narrow>
        <SectionTitle
          badge="Perguntas frequentes"
          title="Tire Todas as Suas Dúvidas"
          subtitle="Ainda tem alguma dúvida? Aqui estão as respostas para as perguntas mais comuns."
          id="faq-titulo"
        />

        <div className="space-y-3" role="list" aria-label="Perguntas frequentes">
          {faq.map((item) => (
            <div key={item.id} role="listitem">
              <FAQItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center font-inter text-sm text-gray-500"
        >
          Ainda tem dúvidas?{' '}
          <a
            href="mailto:sementinhadafe_contato@outlook.com"
            className="text-primary-700 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded"
          >
            Fale conosco por e-mail
          </a>
        </motion.p>
      </Container>
    </section>
  );
}
