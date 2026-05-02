export default function Button({
  children,
  variant = 'primary',  // 'primary' | 'outline' | 'accent'
  arrow = false,
  onClick,
  className = '',
}) {
  const base = 'inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-body text-sm font-semibold cursor-pointer transition-all duration-200 border-none'
  const variants = {
    primary: 'bg-ink text-white hover:-translate-y-0.5 hover:shadow-lg',
    outline: 'bg-transparent border border-strong text-ink hover:border-ink hover:bg-ink/5',
    accent:  'bg-accent text-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,102,255,0.3)]',
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <span>→</span>}
    </button>
  )
}