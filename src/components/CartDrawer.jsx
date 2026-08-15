import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Gift, AlertTriangle, ExternalLink } from 'lucide-react';
import { useCart, COLLECTION_ITEM } from '../context/CartContext';

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function UpsellModal({ onUpgrade, onContinue, books, total }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 px-6 py-5 text-white text-center">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Gift className="w-6 h-6" />
          </div>
          <h3 className="font-lora font-bold text-xl leading-tight">
            Oferta Especial para Você!
          </h3>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-4 flex items-start gap-3 text-left">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="font-inter text-sm text-amber-800">
              Você selecionou <strong>{books.length} livros avulsos</strong> por{' '}
              <strong>{formatPrice(total)}</strong>.
            </p>
          </div>

          <p className="font-inter text-gray-700 text-sm leading-relaxed mb-4">
            Sabia que a{' '}
            <strong className="text-primary-800">Coleção Completa</strong> com todos os{' '}
            <strong>10 livros + 3 bônus exclusivos</strong> sai por apenas{' '}
            <strong className="text-cta-600 text-base">R$ 97,98</strong>?
          </p>

          {total >= 59.9 && (
            <div className="bg-cta-50 border border-cta-200 rounded-xl px-4 py-2 mb-4">
              <p className="font-inter text-xs text-cta-700 font-semibold">
                💡 Você economiza {formatPrice(total - 97.98)} trocando pela coleção!
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={onUpgrade}
              className="w-full bg-cta-600 hover:bg-cta-700 text-white font-inter font-bold py-3.5 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-cta"
            >
              <Gift className="w-4 h-4" />
              Trocar pela Coleção Completa — R$ 97,98
            </button>
            <button
              onClick={onContinue}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-inter font-semibold py-3 px-6 rounded-2xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Continuar mesmo assim ({books.length} links separados)
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MultiCheckoutModal({ books, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-lora font-bold text-gray-900">Links de Pagamento</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="font-inter text-sm text-gray-600 mb-4">
            Clique em cada link para concluir a compra de cada livro separadamente:
          </p>
          <div className="space-y-2">
            {books.map((book, i) => (
              <a
                key={book.id}
                href={book.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hotmart-fb hotmart__button-checkout flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
              >
                <span className="w-7 h-7 rounded-lg bg-primary-100 text-primary-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="font-inter text-sm text-gray-700 group-hover:text-primary-800 flex-1 leading-snug">
                  {book.title}
                </span>
                <span className="font-lora font-bold text-primary-800 text-sm flex-shrink-0">
                  {formatPrice(book.price)}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CartDrawer() {
  const {
    items, removeItem, clearCart, total, isOpen, closeCart,
    hasCollection, individualBooks, addItem,
  } = useCart();

  const [showUpsell, setShowUpsell] = useState(false);
  const [showMultiLinks, setShowMultiLinks] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;

    if (hasCollection) {
      // Direct to collection
      window.open(COLLECTION_ITEM.checkoutUrl, '_blank');
      return;
    }

    if (individualBooks.length === 1) {
      // Direct to that one book
      window.open(individualBooks[0].checkoutUrl, '_blank');
      return;
    }

    // 2+ books — show upsell
    setShowUpsell(true);
  };

  const handleUpgrade = () => {
    clearCart();
    addItem(COLLECTION_ITEM);
    setShowUpsell(false);
    // Redirect to collection
    window.open(COLLECTION_ITEM.checkoutUrl, '_blank');
  };

  const handleContinueAnyway = () => {
    setShowUpsell(false);
    setShowMultiLinks(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[95] w-full max-w-sm bg-white shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Carrinho de compras"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary-800" />
                  <h2 className="font-lora font-bold text-gray-900 text-lg">Seu Carrinho</h2>
                  {items.length > 0 && (
                    <span className="bg-secondary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {items.length}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="font-inter text-xs text-gray-400 hover:text-rose-500 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Limpar
                    </button>
                  )}
                  <button
                    onClick={closeCart}
                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Fechar carrinho"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-5">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="font-lora font-semibold text-gray-400 text-lg">Carrinho vazio</p>
                    <p className="font-inter text-sm text-gray-400 max-w-xs">
                      Adicione a coleção completa ou escolha os livros que mais gostou.
                    </p>
                    <button
                      onClick={closeCart}
                      className="font-inter text-sm text-primary-700 font-semibold hover:underline"
                    >
                      Ver os eBooks →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-start gap-3 bg-gray-50 rounded-2xl p-3 border border-gray-100"
                      >
                        {item.isCollection ? (
                          <div className="w-12 h-14 rounded-xl bg-primary-800 flex items-center justify-center flex-shrink-0">
                            <Gift className="w-6 h-6 text-secondary-400" />
                          </div>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-12 h-14 rounded-xl object-cover flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-inter font-semibold text-gray-800 text-sm leading-snug line-clamp-2">
                            {item.title}
                          </p>
                          {item.isCollection && (
                            <p className="font-inter text-xs text-primary-600 mt-0.5">
                              10 ebooks + 3 bônus
                            </p>
                          )}
                          <p className="font-lora font-bold text-primary-800 mt-1">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-rose-100 hover:text-rose-500 text-gray-400 transition-colors flex-shrink-0"
                          aria-label={`Remover ${item.title}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </motion.div>
                    ))}

                    {/* Upsell suggestion for 2+ books */}
                    {!hasCollection && individualBooks.length >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-secondary-50 border border-secondary-200 rounded-2xl p-4"
                      >
                        <p className="font-inter text-xs text-secondary-800 font-semibold mb-1 flex items-center gap-1.5">
                          <Gift className="w-3.5 h-3.5" />
                          Dica de economia!
                        </p>
                        <p className="font-inter text-xs text-secondary-700 leading-relaxed mb-3">
                          Você tem {individualBooks.length} livros por{' '}
                          <strong>{formatPrice(total)}</strong>. A coleção completa com 10 livros +
                          bônus sai por só <strong>R$ 59,90</strong>!
                        </p>
                        <button
                          onClick={() => { clearCart(); addItem(COLLECTION_ITEM); }}
                          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-inter font-semibold text-xs py-2 rounded-xl transition-colors"
                        >
                          Trocar pela Coleção Completa
                        </button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-gray-100 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-gray-500">Total</span>
                    <span className="font-lora font-bold text-gray-900 text-2xl">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-cta-600 hover:bg-cta-700 text-white font-inter font-bold py-4 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-cta text-base"
                  >
                    Finalizar Compra
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="font-inter text-xs text-gray-400 text-center">
                    🔒 Pagamento seguro via Hotmart
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {showUpsell && (
          <UpsellModal
            books={individualBooks}
            total={total}
            onUpgrade={handleUpgrade}
            onContinue={handleContinueAnyway}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMultiLinks && (
          <MultiCheckoutModal
            books={individualBooks}
            onClose={() => setShowMultiLinks(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
