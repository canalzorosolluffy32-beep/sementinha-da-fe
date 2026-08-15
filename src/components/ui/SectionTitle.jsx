import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span
          className={`
            inline-block mb-3 px-4 py-1 rounded-full text-xs font-inter font-semibold
            uppercase tracking-widest
            ${light
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-primary-100 text-primary-700 border border-primary-200'
            }
          `}
        >
          {badge}
        </span>
      )}

      <h2
        className={`
          font-lora font-bold leading-tight text-balance
          ${light ? 'text-white' : 'text-gray-900'}
        `}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-4 max-w-2xl font-inter leading-relaxed
            ${centered ? 'mx-auto' : ''}
            ${light ? 'text-white/80' : 'text-gray-600'}
          `}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
