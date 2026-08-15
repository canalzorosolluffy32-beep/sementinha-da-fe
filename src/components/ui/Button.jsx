import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary-800 hover:bg-primary-900 text-white focus-visible:ring-primary-600',
  cta: 'bg-cta-600 hover:bg-cta-700 text-white shadow-cta hover:shadow-lg focus-visible:ring-cta-500',
  outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-50 focus-visible:ring-primary-600',
  ghost: 'text-primary-800 hover:bg-primary-50 focus-visible:ring-primary-600',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <Tag
        className={`
          inline-flex items-center justify-center gap-2 font-inter font-semibold
          rounded-2xl transition-all duration-200 cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          ${variants[variant]} ${sizes[size]} ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
