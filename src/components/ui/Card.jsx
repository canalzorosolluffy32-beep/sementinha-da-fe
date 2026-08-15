import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 8px 40px 0 rgba(55,48,163,0.18)' } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`
        bg-white rounded-2xl shadow-card border border-gray-100
        ${padding ? 'p-6 md:p-8' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
