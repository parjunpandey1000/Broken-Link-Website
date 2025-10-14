import { rem, useMantineTheme } from "@mantine/core";

export function useStyles() {
  const theme = useMantineTheme();
  
  return {
    loaderWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing.md,
      color: theme.colors[theme.primaryColor]?.[6] ?? theme.colors.blue[6],
      minHeight: rem(60),
    },
  };
}

export const loaderVariants = (theme: ReturnType<typeof useMantineTheme>) => ({
  primary: {
    color: theme.colors[theme.primaryColor]?.[6] ?? theme.colors.blue[6],
  },
});