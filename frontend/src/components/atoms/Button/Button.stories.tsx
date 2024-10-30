import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    label: 'Button'
  }
};

export const Small: Story = {
  args: {
    label: 'Button'
  }
};
