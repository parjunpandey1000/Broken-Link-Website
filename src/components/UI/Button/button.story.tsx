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

    // RESOLVED: Asserting the type to Mock to satisfy TypeScript
    const onClickMock = args.onClick as Mock;

    // Clear the mock history before the test to prevent counts from accumulating
    onClickMock.mockClear(); 
    
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
    await expect(onClickMock).toHaveBeenCalled();
    // Ensure it was called exactly once, as only one click was simulated
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
  // Added corrected play function for buttonWithStyles
  play: async ({ canvasElement, args }) => {
    // Clear the mock history before the test to prevent counts from accumulating
    const onClickMock = args.onClick as Mock;

    // Clear the mock history before the test to prevent counts from accumulating
    onClickMock.mockClear(); 

    const canvas = within(canvasElement);
    
    // Find the button using the CORRECT visible text name
    const button = canvas.getByRole('button', { name: 'Button with custom style' });

    // Check that the button renders on the screen
    await expect(button).toBeInTheDocument();

    // Check that the button is clickable (i.e., not disabled)
    await expect(button).toBeEnabled();

    // Simulate clicking the button
    await userEvent.click(button);

    // Assert that the mock onClick function was called when the button was clicked
    await expect(onClickMock).toHaveBeenCalled();
    // Ensure it was called exactly once, as only one click was simulated
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
   // ADDED play function for buttonWithIcon
  play: async ({ canvasElement, args }) => {
    // RESOLVED: Asserting the type to Mock to satisfy TypeScript
    const onClickMock = args.onClick as Mock;

    // Clear the mock history before the test to prevent counts from accumulating
    onClickMock.mockClear(); 

    const canvas = within(canvasElement);
    
    // Find the button using the CORRECT visible text name (using regex for safety with potential icon attributes)
    const button = canvas.getByRole('button', { name: /Button with icon/i });

    // Check that the button renders on the screen
    await expect(button).toBeInTheDocument();

    // Check that the button is clickable (i.e., not disabled)
    await expect(button).toBeEnabled();

    // Simulate clicking the button
    await userEvent.click(button);

    // Assert that the mock onClick function was called when the button was clicked
    await expect(onClickMock).toHaveBeenCalled();
    // Ensure it was called exactly once, as only one click was simulated
    await expect(onClickMock).toHaveBeenCalledTimes(1);
  },
};

export const buttonVariantsShowcase: Story = {
  // FIX: Destructure 'onClick' directly from the render function's arguments 
  // to ensure the mock is correctly referenced and passed to the component.
  render: ({ onClick }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost'].map(
        (variant) => (
          <Button 
            key={variant} 
            variant={variant as any}
            onClick={onClick} // <-- Use the destructured mock function
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        )
      )}
    </div>
  ),
  // Simple play function to test the rendering of all variants and the click of the first one
  play: async ({ canvasElement, args }) => {
    const onClickMock = args.onClick as Mock;
    onClickMock.mockClear();

    const canvas = within(canvasElement);

    // Find ALL buttons in the showcase
    const buttons = canvas.getAllByRole('button');

    // 1. Check that all 7 buttons are rendered
    await expect(buttons).toHaveLength(7);

    // FIX: Explicitly find the 'Primary Button' 
    const primaryButton = canvas.getByRole('button', { name: 'Primary Button' });

    // 2. Click the specific Primary Button
    await userEvent.click(primaryButton);

    // 3. Verify the click occurred once
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

