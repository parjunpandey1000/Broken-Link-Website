import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from '@mantine/core';
import { IconArrowRight, IconPhoto } from '@tabler/icons-react';
import { fn, userEvent, expect, within, Mock } from '@storybook/test';


const BUTTON_VARIANTS = [
  'primary', 
  'secondary', 
  'success', 
  'warning', 
  'error', 
  'outline', 
  'ghost'
] as const;

const DISABLE_BUTTON_VARIANTS = [
  'primary', 
  'secondary', 
  'success', 
  'outline', 
  'ghost'
] as const;


interface ButtonArgs extends ButtonProps {
  style?: React.CSSProperties;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'secondary' | 'outline' | 'ghost';
  label?: string;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

async function ButtonClick(canvasElement: HTMLElement, args: ButtonArgs, buttonName: string) {
  const onClickMock = args.onClick as Mock;
  onClickMock.mockClear();

  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: new RegExp(buttonName, 'i') });

  await expect(button).toBeInTheDocument();
  await expect(button).toBeEnabled();
  await userEvent.click(button);

  await expect(onClickMock).toHaveBeenCalledTimes(1);
}

export const button: Story = {
  args: {
    children: 'Click me!',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    await ButtonClick(canvasElement, args, 'Click me!');
  },
};

export const buttonWithStyles: Story = {
  args: {
    children: 'Button with custom style',
    onClick: fn(),
    style: {
      backgroundColor: 'cyan',
      color: 'white',
      borderRadius: '0.5rem',
      width: '35rem',
    },
  },
  play: async ({ canvasElement, args }) => {
    await ButtonClick(canvasElement, args, 'Button with custom style');
  },
};

export const buttonWithIcon: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Button with icon',
    onClick: fn(),
    variant: 'primary',
    leftSection: <IconPhoto size={14} />,
    rightSection: <IconArrowRight size={14} />,
  },
  play: async ({ canvasElement, args }) => {
    await ButtonClick(canvasElement, args, 'Button with icon');
  },
};

export const buttonVariantsShowcase: Story = {
  render: ({ onClick }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {BUTTON_VARIANTS.map(
        (variant) => (
          <Button 
            key={variant} 
            variant={variant}
            onClick={onClick}
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        )
      )}
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    await ButtonClick(canvasElement, args, 'Primary Button');
  },
};

export const disabledButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {DISABLE_BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          Disabled {variant}
        </Button>
      ))}
    </div>
  ),
};

