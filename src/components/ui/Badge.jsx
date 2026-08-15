const colorMap = {
  primary: 'bg-primary-100 text-primary-800 border border-primary-200',
  secondary: 'bg-secondary-100 text-secondary-800 border border-secondary-200',
  cta: 'bg-cta-100 text-cta-800 border border-cta-400',
  white: 'bg-white text-primary-800 border border-gray-200 shadow-sm',
};

export default function Badge({ children, color = 'primary', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        text-xs font-inter font-semibold tracking-wide uppercase
        rounded-full ${colorMap[color]} ${className}
      `}
    >
      {children}
    </span>
  );
}
