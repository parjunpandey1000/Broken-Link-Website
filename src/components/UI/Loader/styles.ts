import { rem, MantineTheme } from "@mantine/core";

export function useStyles(theme: MantineTheme) {  
  return {
    loaderWrapper: {
      color: theme.colors[theme.primaryColor]?.[6] ?? theme.colors.blue[6],
      minHeight: rem(60),
    },
  };
}

export const loaderVariants = (theme: MantineTheme) => ({
  primary: {
    color: theme.colors.blue[6],
  },
});