import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode

  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg',
}

export function Heading({ children , asChild, className, size = 'md' }: HeadingProps) {
  const Component = asChild ? Slot : 'span'

  const internalClassName = clsx('text-gray-100 font-bold font-sans', {
    'text-lg': size === 'sm',
    'text-xl': size === 'md',
    'text-2xl': size === 'lg',
  }, className)

  return (
    <Component className={internalClassName}>
      {children}
    </Component>
  )
}
