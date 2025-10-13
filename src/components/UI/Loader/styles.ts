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
  primary: { color: theme.colors.primary?.[5] ?? theme.colors.blue[5] },
  secondary: { color: theme.colors.purple?.[5] ?? theme.colors.violet[5] },
  success: { color: theme.colors.green?.[5] ?? theme.colors.teal[5] },
  warning: { color: theme.colors.yellow?.[5] ?? theme.colors.orange[5] },
  error: { color: theme.colors.red?.[5] ?? theme.colors.pink[5] },
  outline: {
    color: theme.colors.cyan?.[5] ?? theme.colors.blue[5],
    border: `2px solid ${theme.colors.cyan?.[5] ?? theme.colors.blue[5]}`,
  },
  ghost: { color: theme.colors.cyan?.[5] ?? theme.colors.blue[5] },
});
