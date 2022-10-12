import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: { 
    children: 'Heading Children',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading Children</h1>
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}
