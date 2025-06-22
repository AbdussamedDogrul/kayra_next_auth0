interface AuthButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  className?: string
}

export function AuthButton({ 
  onClick, 
  children, 
  variant = 'primary',
  className = '' 
}: AuthButtonProps) {
  const baseClasses = "font-bold py-2 px-4 rounded transition-colors"
  
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white", 
    danger: "bg-red-500 hover:bg-red-600 text-white"
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}