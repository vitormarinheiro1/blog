import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

function Image({ src, alt, ...props }) {
  return <BaseComponent as="img" src={src} alt={alt} {...props} />;
}

export default Image;
