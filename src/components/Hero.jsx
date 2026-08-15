import { motion } from 'framer-motion';
import { Star, ShieldCheck, Download, Lock, Check, ShoppingBag, Sprout } from 'lucide-react';
import Container from './ui/Container';
import CTAButton from './ui/CTAButton';
import Badge from './ui/Badge';
import { useCart, COLLECTION_ITEM } from '../context/CartContext';

function AddCollectionToCart() {
  const { items, addItem, openCart } = useCart();
  const inCart = items.some((i) => i.isCollection);

  const handleClick = () => {
    if (inCart) { openCart(); return; }
    addItem(COLLECTION_ITEM);
    setTimeout(() => openCart(), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2.5 font-inter font-bold text-base py-4 px-8 rounded-2xl transition-all duration-200 border-2 w-full sm:w-auto ${
        inCart
          ? 'border-primary-600 bg-primary-50 text-primary-800'
          : 'border-primary-200 bg-white hover:bg-primary-50 text-primary-700 shadow-sm'
      }`}
    >
      {inCart ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
      {inCart ? 'No Carrinho — Ver' : 'Adicionar ao Carrinho'}
    </button>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-hero-gradient"
      aria-labelledby="hero-title"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div {...fadeUp(0)}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <Badge color="primary">
                  <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                  Mais de 248 famílias transformadas
                </Badge>
                <Badge color="secondary" className="font-bold animate-pulse">
                  🔥 47% de Desconto
                </Badge>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              id="hero-title"
              className="font-lora font-bold text-gray-900 leading-tight text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              Plante a Semente da{' '}
              <span className="text-primary-800">Fé</span> no Coração do{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary-500">seu Filho</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-secondary-200 rounded-full -z-0 opacity-60"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-gray-600 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
            >
              Histórias bíblicas encantadoras que ensinam amor, esperança e caráter desde os
              primeiros anos de vida. Um presente que dura para sempre.
            </motion.p>

            {/* Social proof stars */}
            <motion.div {...fadeUp(0.3)} className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex" role="img" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" aria-hidden="true" />
                ))}
              </div>
              <span className="font-inter text-sm font-semibold text-gray-700">
                5.0 · <span className="text-gray-500 font-normal">284 avaliações</span>
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start w-full max-w-lg lg:max-w-full">
              <CTAButton href="https://pay.hotmart.com/O106910150V" size="xl" className="w-full sm:w-auto">
                Comprar Agora
              </CTAButton>
              <AddCollectionToCart />
            </motion.div>
            <motion.div {...fadeUp(0.5)} className="mt-4 text-center sm:text-left">
              <p className="font-inter text-xs text-gray-500 flex items-center gap-1.5 justify-center sm:justify-start">
                <ShieldCheck className="w-3.5 h-3.5 text-cta-600 flex-shrink-0" aria-hidden="true" />
                Garantia de 7 dias
              </p>
              <p className="font-inter text-xs text-gray-500 flex items-center gap-1.5 mt-1 justify-center sm:justify-start">
                <Download className="w-3.5 h-3.5 text-cta-600 flex-shrink-0" aria-hidden="true" />
                10 Ebooks • Download Imediato
              </p>
              <p className="font-inter text-xs text-gray-500 flex items-center gap-1.5 mt-1 justify-center sm:justify-start">
                <Lock className="w-3.5 h-3.5 text-cta-600 flex-shrink-0" aria-hidden="true" />
                Pagamento 100% seguro
              </p>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative max-w-sm w-full">
              {/* Book 3D shadow effect */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 bg-primary-900 rounded-2xl opacity-20 blur-sm"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary-700 rounded-2xl opacity-30"
                aria-hidden="true"
              />
              <motion.img
                src="/ebook-cover.png"
                alt="Capa do eBook Sementinha de Fé — Coleção Completa com 10 Ebooks Ilustrados"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                loading="eager"
              />

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 z-20 bg-secondary-500 text-white rounded-2xl px-4 py-2 shadow-lg text-center"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                aria-label="Promoção: 47% OFF - de R$ 209,00 por R$ 97,98"
              >
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider block mb-1">
                  47% OFF
                </span>
                <p className="font-inter text-xs font-medium opacity-80 line-through">R$ 209,00</p>
                <p className="font-lora font-bold text-xl leading-none">R$ 97,98</p>
                <p className="font-inter text-[10px] opacity-70 mt-0.5">3x de R$ 32,66</p>
              </motion.div>

              {/* Floating sprout */}
              <motion.div
                className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl px-4 py-2 shadow-card flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
              >
                <Sprout className="w-5 h-5 text-cta-600" aria-hidden="true" />
                <p className="font-inter text-xs font-semibold text-gray-700">PDF • Alta Qualidade</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
