import NextLink from "next/link";
import Text from "../Text/Text";
import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    styleSheet?: StyleSheet;
    variant?: ThemeTypographyVariants;
    colorVariant?:
      | "primary"
      | "accent"
      | "neutral"
      | "success"
      | "warning"
      | "negative";
    colorVariantEnabled?: boolean;
  }
  
  const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (
      {
        href,
        children,
        colorVariant,
        styleSheet,
        colorVariantEnabled = true, // Valor padrão
        ...props
      }: LinkProps,
      ref,
    ) => {
      const theme = useTheme();
      const isExternalLink = href.startsWith("http");
  
      const currentColorSet = {
        color: theme.colors[colorVariant].x500,
        hover: {
          color: theme.colors[colorVariant].x400,
        },
        focus: {
          color: theme.colors[colorVariant].x600,
        },
      };
  
      const linkProps = {
        ref,
        href,
        styleSheet: {
          textDecoration: "none",
          ...(colorVariantEnabled && {
            color: currentColorSet.color,
          }),
          ...styleSheet,
        },
        ...props,
      };
  
      if (isExternalLink) {
        return (
          <Text
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            {...linkProps}
          >
            {children}
          </Text>
        );
      }
  
      return (
        <NextLink href={href} passHref>
          <Text {...linkProps}>{children}</Text>
        </NextLink>
      );
    },
  );
  

Link.defaultProps = {
  colorVariant: "primary",
  colorVariantEnabled: true,
};

export default Link;
