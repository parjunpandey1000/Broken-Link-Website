import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IconArrowRight, IconPhoto } from '@tabler/icons-react';
import { fn, userEvent, expect, within, Mock } from '@storybook/test';

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

export const button: Story = {
  args: {
    children: 'Click me!',
  },
  play: async ({ canvasElement, args }) => {
    const onClickMock = args.onClick as Mock;
    onClickMock.mockClear(); 
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Click me!' });
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(onClickMock).toHaveBeenCalled();
    await expect(onClickMock).toHaveBeenCalledTimes(1);
  },
};

export const buttonWithStyles: Story = {
  args: {
    children: 'Button with custom style',
    style: {
      backgroundColor: 'cyan',
      color: 'white',
      borderRadius: '0.5rem',
      width: '35rem',
    },
  },
  play: async ({ canvasElement, args }) => {
    const onClickMock = args.onClick as Mock;
    onClickMock.mockClear(); 
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button with custom style' });
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(onClickMock).toHaveBeenCalled();
    await expect(onClickMock).toHaveBeenCalledTimes(1);
  },
};

export const buttonWithIcon: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Button with icon',
    variant: 'primary',
    leftSection: <IconPhoto size={14} />,
    rightSection: <IconArrowRight size={14} />,
  },
  play: async ({ canvasElement, args }) => {
    const onClickMock = args.onClick as Mock;
    onClickMock.mockClear(); 
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Button with icon/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(onClickMock).toHaveBeenCalled();
    await expect(onClickMock).toHaveBeenCalledTimes(1);
  },
};

export const buttonVariantsShowcase: Story = {
  render: ({ onClick }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost'].map(
        (variant) => (
          <Button 
            key={variant} 
            variant={variant as any}
            onClick={onClick}
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        )
      )}
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const onClickMock = args.onClick as Mock;
    onClickMock.mockClear();
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons).toHaveLength(7);
    const primaryButton = canvas.getByRole('button', { name: 'Primary Button' });
    await userEvent.click(primaryButton);
    await expect(onClickMock).toHaveBeenCalledTimes(1);
  },
};

export const disabledButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {['primary', 'secondary', 'success', 'outline', 'ghost'].map((variant) => (
        <Button key={variant} variant={variant as any} disabled>
          Disabled {variant}
        </Button>
      ))}
    </div>
  ),
};

