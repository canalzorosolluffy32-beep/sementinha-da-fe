export default function Container({ children, className = '', narrow = false }) {
  return (
    <div
      className={`
        w-full mx-auto px-4 sm:px-6 lg:px-8
        ${narrow ? 'max-w-3xl' : 'max-w-6xl'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
