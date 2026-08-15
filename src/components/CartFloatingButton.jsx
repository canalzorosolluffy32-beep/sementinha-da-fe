import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartFloatingButton() {
  const { count, total, toggleCart } = useCart();

  return (
    <motion.button
      onClick={toggleCart}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-[80] bg-primary-800 hover:bg-primary-900 text-white rounded-2xl shadow-2xl transition-colors duration-200 flex items-center gap-2.5 px-4 py-3"
      aria-label={`Carrinho — ${count} ${count === 1 ? 'item' : 'itens'}, total ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5" aria-hidden="true" />
        <AnimatePresence>
          {count > 0 && (
            <motion.span
              key={count}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2.5 -right-2.5 bg-secondary-500 text-white text-[10px] font-bold w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center leading-none px-0.5"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.span
            key="total"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="font-lora font-bold text-sm whitespace-nowrap overflow-hidden"
          >
            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </motion.span>
        ) : (
          <motion.span
            key="empty"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="font-inter text-xs text-white/80 whitespace-nowrap overflow-hidden"
          >
            Carrinho
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
