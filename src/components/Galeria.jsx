import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check, Plus } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import CTAButton from './ui/CTAButton';
import { useCart } from '../context/CartContext';

const historias = [
  {
    id: 1,
    src: '/Capa (A criação do Mundo e o jardim do Édem).jpeg',
    title: 'A Criação do Mundo e o Jardim do Éden',
    desc: 'O princípio de tudo e a beleza da criação. Uma história incrível para começar a jornada de fé.',
    checkoutUrl: 'https://pay.hotmart.com/D106870693O',
  },
  {
    id: 2,
    src: '/Capa (A arca de Noé e o Arco-Íris).jpeg',
    title: 'A Arca de Noé e o Arco-Íris',
    desc: 'A promessa de Deus e a salvação da família de Noé. Mostra como Deus cuida de nós em todas as situações.',
    checkoutUrl: 'https://pay.hotmart.com/C106871132X',
  },
  {
    id: 3,
    src: '/Capa (José, o Sonhador).png',
    title: 'José, o Sonhador',
    desc: 'A jornada de José do poço até o palácio com fé em Deus. Ensina o poder do perdão e da confiança nos planos divinos.',
    checkoutUrl: 'https://pay.hotmart.com/F106871160C',
  },
  {
    id: 4,
    src: '/Capa (Moisés e a Abertura do Mar Vermelho).jpeg',
    title: 'Moisés e a Abertura do Mar Vermelho',
    desc: 'O grande milagre da libertação e do cuidado de Deus. Para aprender que não há obstáculos para a fé.',
    checkoutUrl: 'https://pay.hotmart.com/K106871153T',
  },
  {
    id: 5,
    src: '/Capa (Josué e as Muralhas de Jericó).jpeg',
    title: 'Josué e as Muralhas de Jericó',
    desc: 'A incrível vitória alcançada através da obediência. Uma lição sobre ouvir a voz de Deus e seguir seus caminhos.',
    checkoutUrl: 'https://pay.hotmart.com/N106871232P',
  },
  {
    id: 6,
    src: '/Capa (A Grande Força de Sansão).png',
    title: 'A Grande Força de Sansão',
    desc: 'O poder verdadeiro que vem do Senhor para Seus escolhidos. Como nossa força vem do Espírito Santo.',
    checkoutUrl: 'https://pay.hotmart.com/K106871237N',
  },
  {
    id: 7,
    src: '/Capa (A Lealdade de Rute).png',
    title: 'A Lealdade de Rute',
    desc: 'Uma linda história sobre amor, cuidado e fidelidade. Inspirando amor ao próximo e respeito familiar.',
    checkoutUrl: 'https://pay.hotmart.com/N106873921S',
  },
  {
    id: 8,
    src: '/Capa (Davi e o Gigante Golias).png',
    title: 'Davi e o Gigante Golias',
    desc: 'A coragem de um jovem pastor diante de um gigante. Porque com Deus não precisamos ter medo de nada.',
    checkoutUrl: 'https://pay.hotmart.com/Y106874059D',
  },
  {
    id: 9,
    src: '/Capa (Daniel e a Cova dos Leões).jpeg',
    title: 'Daniel e a Cova dos Leões',
    desc: 'A proteção divina para aqueles que confiam e oram. Mostrando como a oração nos guarda do perigo.',
    checkoutUrl: 'https://pay.hotmart.com/B106874000J',
  },
  {
    id: 10,
    src: '/Capa (Os Milagres e Parábolas de Jesus).jpeg',
    title: 'Os Milagres e Parábolas de Jesus',
    desc: 'Ensinamentos inesquecíveis de amor, cura e salvação. Os passos do nosso maior Mestre e Salvador.',
    checkoutUrl: 'https://pay.hotmart.com/C106874025G',
  },
];

const BOOK_PRICE = 14.9;

function AddToCartButton({ item }) {
  const { items, addItem, openCart } = useCart();
  const inCart = items.some((i) => i.id === item.id);
  const [pulse, setPulse] = useState(false);

  const handleClick = () => {
    if (inCart) {
      openCart();
      return;
    }
    addItem({ ...item, price: BOOK_PRICE });
    setPulse(true);
    setTimeout(() => setPulse(false), 800);
    setTimeout(() => openCart(), 350);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      animate={pulse ? { scale: [1, 1.06, 1] } : {}}
      transition={{ duration: 0.3 }}
      className={`
        w-full sm:w-auto inline-flex items-center justify-center gap-2.5
        font-inter font-semibold text-sm py-3.5 px-6 rounded-2xl transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${inCart
          ? 'bg-cta-600 text-white focus-visible:ring-cta-500'
          : 'bg-primary-800 hover:bg-primary-900 text-white focus-visible:ring-primary-600'
        }
      `}
      aria-label={inCart ? 'Ver no carrinho' : `Adicionar ${item.title} ao carrinho`}
    >
      <AnimatePresence mode="wait">
        {inCart ? (
          <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            No Carrinho — Ver
          </motion.span>
        ) : (
          <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Adicionar ao Carrinho
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Galeria() {
  return (
    <section id="detalhes" className="py-20 md:py-28 bg-white" aria-labelledby="galeria-titulo">
      <Container>
        <SectionTitle
          badge="Escolha os eBooks Avulsos"
          title="Conheça os eBooks"
          subtitle="Explore as histórias bíblicas que compõem o material e escolha o seu eBook preferido ou leve a coleção completa."
          id="galeria-titulo"
        />

        <div className="flex flex-col gap-12 md:gap-20 max-w-5xl mx-auto mt-12 md:mt-16">
          {historias.map((hist, i) => (
            <motion.div
              key={hist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 p-2`}
            >
              <div className="w-full md:w-1/2 flex-shrink-0">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img
                    src={hist.src}
                    alt={hist.title}
                    className="w-full aspect-[2/3] object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-widest bg-primary-100 text-primary-700 w-fit mx-auto md:mx-0">
                  História {String(hist.id).padStart(2, '0')}
                </span>
                <h3 className="font-lora font-bold text-gray-900 text-3xl md:text-4xl leading-tight mb-4">
                  {hist.title}
                </h3>
                <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                  {hist.desc}
                </p>

                {/* Price */}
                <div className="mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="font-inter text-sm text-gray-500">Preço avulso:</span>
                  <span className="font-inter text-sm text-gray-400 line-through">R$ 20,90</span>
                  <span className="font-lora font-bold text-primary-800 text-2xl">R$ 14,90</span>
                  <span className="bg-secondary-100 text-secondary-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-secondary-300">
                    35% OFF
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
                  <AddToCartButton item={hist} />
                  <CTAButton
                    href={hist.checkoutUrl}
                    size="md"
                    className="w-full sm:w-auto px-6 py-3.5 text-sm rounded-2xl"
                  >
                    Comprar Agora
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
