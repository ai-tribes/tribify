import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export const Button = ({ href, children, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = "px-8 py-3 transition-colors duration-200"
  const variants = {
    primary: "bg-transparent hover:bg-gray-50 dark:hover:bg-dark-lighter text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800",
    secondary: "bg-transparent hover:bg-gray-50 dark:hover:bg-dark-lighter text-gray-600 dark:text-gray-400"
  }

  const buttonContent = (
    <span className="text-sm font-medium">{children}</span>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {buttonContent}
    </button>
  )
} 