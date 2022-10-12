import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export type TextProps = {
  children: ReactNode

  asChild?: boolean
  size?: 'sm' | 'md' | 'lg',
}

export function Text({ children , asChild, size = 'md' }: TextProps) {
  const Component = asChild ? Slot : 'span'

  const className = clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',
  })

  return (
    <Component className={className}>
      {children}
    </Component>
  )
}
