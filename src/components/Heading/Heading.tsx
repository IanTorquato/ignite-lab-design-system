import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode

  asChild?: boolean
  size?: 'sm' | 'md' | 'lg',
}

export function Heading({ children , asChild, size = 'md' }: HeadingProps) {
  const Component = asChild ? Slot : 'span'

  const className = clsx('text-gray-100 font-bold font-sans', {
    'text-lg': size === 'sm',
    'text-xl': size === 'md',
    'text-2xl': size === 'lg',
  })

  return (
    <Component className={className}>
      {children}
    </Component>
  )
}
