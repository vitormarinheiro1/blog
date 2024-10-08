import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;
  target?: string;
  rel?: string;
  as?: keyof JSX.IntrinsicElements; 
}

const Text = React.forwardRef(
  ({ tag, styleSheet, variant, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        as={tag}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        ref={ref}
        {...props}
      />
    );
  },
);

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};

export default Text;
