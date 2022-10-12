import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: { 
    children: 'Text Children',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <strong>Text Children</strong>
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
