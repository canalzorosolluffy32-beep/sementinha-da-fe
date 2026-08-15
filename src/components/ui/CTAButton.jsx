import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTAButton({
  children,
  href = 'https://pay.hotmart.com/O100870535V?checkoutMode=2',
  className = '',
  size = 'lg',
  isHotmart = true,
  ...props
}) {
  const sizeClasses = {
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl',
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, boxShadow: '0 12px 40px 0 rgba(5,150,105,0.45)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        ${isHotmart ? 'hotmart-fb hotmart__button-checkout' : ''}
        inline-flex items-center justify-center gap-3
        bg-cta-600 hover:bg-cta-700 text-white
        font-inter font-bold rounded-2xl
        shadow-cta transition-colors duration-200
        cursor-pointer w-full max-w-sm
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-500 focus-visible:ring-offset-2
        ${sizeClasses[size]} ${className}
      `}
      aria-label={typeof children === 'string' ? children : 'Comprar Coleção Completa'}
      {...props}
    >
      <ShoppingCart className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      <span>{children || 'Quero a Coleção Completa!'}</span>
    </motion.a>
  );
}
