import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    children: <div>This is the card content!</div>,
  },
};

export const CardWithImage: Story = {
  args: {
    children: (
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <img src="https://picsum.photos/200/150"  alt="Example" />
        <p>This is the card with the image!</p>
      </div>
    ),
  },
};

export const CardWithCustomStyle: Story = {
  args: {
    children: (
      <div>
        <h3>Custom Card</h3>
        <p>Card with a light background and rounded corners.</p>
      </div>
    ),
    style: {
      backgroundColor: '#e0f7fa',
      border: '2px solid #00acc1',
      color: '#006064',
      borderRadius: '1rem',
      width: '20rem',
    },
  },
};