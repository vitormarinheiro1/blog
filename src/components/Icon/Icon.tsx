import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "36px",
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function Icon({ size, name, ...props }: IconProps) {
  const CurrentIcon = icons[name];
  if(!CurrentIcon) return <>"{name}" is a not a valid <Icon /></>
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </BaseComponent>
  );


}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md',
}