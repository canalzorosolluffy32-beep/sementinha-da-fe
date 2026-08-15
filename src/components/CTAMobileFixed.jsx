import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function CTAMobileFixed() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 3s or after scrolling past the hero
    const timer = setTimeout(() => setVisible(true), 3000);

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          role="complementary"
          aria-label="Botão de compra rápida"
        >
          <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-inter font-bold text-gray-900 text-sm leading-none truncate">
                Coleção 10 Ebooks
              </p>
              <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span className="bg-secondary-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  47% OFF
                </span>
                <span className="font-inter text-gray-400 text-xs line-through">R$ 209,00</span>
                <span className="font-lora font-bold text-primary-800 text-base">R$ 97,98</span>
              </div>
              <p className="font-inter text-[10px] text-gray-500 mt-0.5">ou 3x de R$ 32,66</p>
            </div>
            <a
              href="https://pay.hotmart.com/O106910150V"
              className="hotmart-fb hotmart__button-checkout flex items-center gap-2 bg-cta-600 text-white font-inter font-bold text-sm px-5 py-3 rounded-xl shadow-cta flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-500"
              aria-label="Comprar Coleção Completa por R$ 97,98"
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              Comprar
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
