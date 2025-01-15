import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../../utils/style";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "destructive" | "icon";
}

const button = tv({
  extend: focusRing,
  base: "px-5 py-2 text-lg transition rounded-[12px] bg-transparent text-white cursor-pointer",
  variants: {
    variant: {
      primary: "hover:bg-white/10 pressed:opacity-30",
      destructive: "text-[#FF453A] hover:bg-white/5 pressed:opacity-30",
      icon: "",
    },
    isDisabled: {
      true: "opacity-60",
    },
    isRounded: {
      true: "rounded-[500px]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function ButtonTransparent(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}
