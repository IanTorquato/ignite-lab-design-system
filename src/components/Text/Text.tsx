import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export type TextProps = {
  children: ReactNode

  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg',
}

export function Text({ children , asChild, className, size = 'md' }: TextProps) {
  const Component = asChild ? Slot : 'span'

  const internalClassName = clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',
  }, className)

  return (
    <Component className={internalClassName}>
      {children}
    </Component>
  )
}
