import React from "react";
import { Loader as MantineLoader, useMantineTheme } from "@mantine/core";
import { useStyles, loaderVariants } from "./styles";

type LoaderSize = "small" | "medium" | "large" | "extraLarge";

interface LoaderProps {
  size?: LoaderSize;
  variant?: keyof ReturnType<typeof loaderVariants>;
  className?: string;
}
const sizeMapper: Record<LoaderSize, "xs" | "sm" | "md" | "lg" | "xl"> = {
  small: "sm",
  medium: "md",
  large: "lg",
  extraLarge: "xl",
};

export const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  variant = "primary",
  className, 
  ...props
}) => {
  const theme = useMantineTheme();
  const styles = useStyles(theme);
  const variants = loaderVariants(theme);
  const variantStyle = variants[variant] || variants.primary;

  return (
    <div style={{ ...styles.loaderWrapper, ...variantStyle }} className={className}>
      <MantineLoader size={sizeMapper[size as LoaderSize]} color={variantStyle.color} {...props} />
    </div>
  );
};
