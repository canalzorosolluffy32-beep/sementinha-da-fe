import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Download, ShoppingBag, Check } from 'lucide-react';
import Container from './ui/Container';
import CTAButton from './ui/CTAButton';
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
      className={`inline-flex items-center gap-2.5 font-inter font-semibold text-sm py-3.5 px-7 rounded-2xl transition-all duration-200 border-2 ${
        inCart
          ? 'border-white/60 bg-white/20 text-white'
          : 'border-white/30 bg-white/10 hover:bg-white/20 text-white'
      }`}
    >
      {inCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
      {inCart ? 'No Carrinho — Ver' : 'Adicionar ao Carrinho'}
    </button>
  );
}

export default function CTAFinal() {
  return (
    <section
      id="comprar"
      className="py-20 md:py-28 bg-cta-gradient relative overflow-hidden"
      aria-labelledby="cta-final-titulo"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container narrow className="relative z-10 text-center">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
          role="img"
          aria-label="5 estrelas de avaliação"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 text-secondary-400 fill-secondary-400" aria-hidden="true" />
          ))}
        </motion.div>

        <motion.h2
          id="cta-final-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-lora font-bold text-white leading-tight text-balance"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          Plante Hoje a Sementinha<br />
          que Vai Durar Para Sempre
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 font-inter text-white/80 leading-relaxed max-w-xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
        >
          Seu filho está crescendo agora. Cada história que você conta hoje se tornará
          uma raiz de fé que nenhuma tempestade vai arrancar.
        </motion.p>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-8 py-6"
        >
          <div className="inline-flex items-center gap-1.5 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-md">
            🔥 47% de Desconto
          </div>
          <p className="font-inter text-white/70 text-sm mb-1">Acesso completo aos 10 Ebooks Ilustrados + 3 bônus</p>
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="font-inter text-white/50 text-2xl line-through">R$ 209,00</span>
            <span className="font-lora font-bold text-white text-5xl">R$ 97,98</span>
          </div>
          <p className="font-inter text-white/80 text-sm font-semibold mt-1">ou 3x de R$ 32,66 sem juros</p>
          <p className="font-inter text-white/60 text-xs mt-1">Cartão de crédito, PIX ou Boleto</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <CTAButton href="https://pay.hotmart.com/O106910150V" size="xl" className="max-w-sm">
            Quero a Coleção Completa!
          </CTAButton>
          <AddCollectionToCart />

          {/* Trust micro-signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/70 text-xs font-inter">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Pagamento seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Download className="w-4 h-4" aria-hidden="true" />
              Download imediato
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Garantia 7 dias
            </span>
          </div>
        </motion.div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 bg-secondary-500/20 border border-secondary-400/30 rounded-full px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" aria-hidden="true" />
          <p className="font-inter text-white/90 text-sm font-medium">
            Preço promocional por tempo limitado
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
