import { MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors = 'primary' | 'cyan' | 'purple' | 'success' | 'warning' | 'error';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}