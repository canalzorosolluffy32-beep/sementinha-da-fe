import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problema from './components/Problema';
import ParaQuem from './components/ParaQuem';
import Solucao from './components/Solucao';
import OQueRecebe from './components/OQueRecebe';
import Beneficios from './components/Beneficios';
import Galeria from './components/Galeria';
import Bonus from './components/Bonus';
import Depoimentos from './components/Depoimentos';
import Garantia from './components/Garantia';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import CTAMobileFixed from './components/CTAMobileFixed';

export default function App() {
  return (
    <CartProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-800 focus:text-white focus:rounded-lg focus:font-inter focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />
      <CartDrawer />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Problema />
        <ParaQuem />
        <Solucao />
        <OQueRecebe />
        <Beneficios />
        <Galeria />
        <Bonus />
        <Depoimentos />
        <Garantia />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <CTAMobileFixed />
    </CartProvider>
  );
}
