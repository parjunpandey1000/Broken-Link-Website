import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IconArrowRight, IconPhoto } from '@tabler/icons-react';
import { fn, userEvent, expect, within } from '@storybook/test';

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
    const canvas = within(canvasElement);
    
    // Find the button by its role and its visible text name
    const button = canvas.getByRole('button', { name: 'Click me!' });

    // Check that the button renders on the screen
    await expect(button).toBeInTheDocument();

    // Check that the button is clickable (i.e., not disabled)
    await expect(button).toBeEnabled();

    // Simulate clicking the button
    await userEvent.click(button);

    // Assert that the mock onClick function was called when the button was clicked
    await expect(args.onClick).toHaveBeenCalled();
    
    // Ensure it was called exactly once, as only one click was simulated
    await expect(args.onClick).toHaveBeenCalledTimes(1);
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
};

export const buttonWithIcon: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Button with icon',
    variant: 'primary',
    leftSection: <IconPhoto size={14} />,
    rightSection: <IconArrowRight size={14} />,
  },
};

export const buttonVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost'].map(
        (variant) => (
          <Button key={variant} variant={variant as any}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        )
      )}
    </div>
  ),
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

