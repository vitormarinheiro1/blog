import { BaseComponent } from "@src/theme/BaseComponent";
import type { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  //Resolver esse any depois
  tag: any;
  children: React.ReactNode;
  styleSheet: StyleSheet;
}

function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet}>
      {children}
    </BaseComponent>
  );
}

export default Box;
