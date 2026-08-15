import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, ShoppingCart, Menu, X, Check } from 'lucide-react';
import Container from './ui/Container';
import { useCart, COLLECTION_ITEM } from '../context/CartContext';

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, total, toggleCart, items, addItem, openCart } = useCart();
  
  const inCart = items.some((i) => i.isCollection);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre o Produto', href: '#solucao' },
    { label: 'Detalhes', href: '#detalhes' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Para quem é', href: '#para-quem' },
    { label: 'Bônus', href: '#bonus' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleAddCollection = () => {
    if (inCart) {
      openCart();
      return;
    }
    addItem(COLLECTION_ITEM);
    setTimeout(() => openCart(), 300);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-lg flex-shrink-0"
            aria-label="Sementinha de Fé — página inicial"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary-800 flex items-center justify-center flex-shrink-0">
              <Sprout className="w-4 h-4 md:w-5 md:h-5 text-secondary-400" aria-hidden="true" />
            </div>
            <span className="font-lora font-bold text-primary-900 text-base md:text-lg leading-tight whitespace-nowrap">
              Sementinha<br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <span className="text-secondary-500 text-xs md:text-sm font-semibold tracking-wide">de Fé</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Menu principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-medium text-gray-700 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Add Collection & Cart */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Desktop Add Collection */}
            <button
              onClick={handleAddCollection}
              className={`hidden lg:flex items-center gap-2 font-inter font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 border-2 ${
                inCart
                  ? 'bg-primary-50 border-primary-200 text-primary-800'
                  : 'bg-white border-primary-200 text-primary-700 hover:bg-primary-50'
              }`}
            >
              {inCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
              {inCart ? 'Coleção no Carrinho' : 'Adicionar Coleção'}
            </button>

            {/* Prominent Cart Trigger */}
            <motion.button
              onClick={toggleCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-colors shadow-sm border
                ${count > 0 
                  ? 'bg-cta-600 hover:bg-cta-700 text-white border-cta-600 shadow-cta' 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                }
              `}
              aria-label={`Carrinho com ${count} itens, total ${formatPrice(total)}`}
            >
              <div className="relative flex-shrink-0">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 md:-top-2.5 md:-right-2.5 bg-secondary-500 text-white text-[10px] md:text-xs font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center leading-none"
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              <AnimatePresence mode="wait">
                {count > 0 ? (
                  <motion.div
                    key="total"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex flex-col items-start overflow-hidden whitespace-nowrap pl-1 md:pl-2"
                  >
                    <span className="font-inter text-[10px] uppercase font-bold opacity-80 leading-none mb-0.5">Meu Carrinho</span>
                    <span className="font-lora font-bold text-sm md:text-base leading-none">{formatPrice(total)}</span>
                  </motion.div>
                ) : (
                  <motion.span
                    key="empty"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-inter font-bold text-sm hidden md:block overflow-hidden whitespace-nowrap"
                  >
                    Carrinho
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 -mr-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 flex-shrink-0"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <Container>
              <nav className="py-4 flex flex-col gap-2" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-inter font-medium text-gray-700 hover:text-primary-800 py-3 border-b border-gray-50 last:border-0 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    handleAddCollection();
                    setMenuOpen(false);
                  }}
                  className={`mt-4 flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl border-2 transition-colors ${
                    inCart
                      ? 'bg-primary-50 border-primary-200 text-primary-800'
                      : 'bg-white border-primary-200 text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {inCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                  {inCart ? 'Coleção no Carrinho' : 'Adicionar Coleção Completa'}
                </button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
