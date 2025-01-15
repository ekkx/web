import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../../utils/style";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "icon";
}

const button = tv({
  extend: focusRing,
  base: "px-5 py-2 text-sm text-center transition rounded-[12px] cursor-pointer",
  variants: {
    variant: {
      primary: "bg-white/10 hover:bg-white/20 pressed:opacity-60 text-white",
      secondary:
        "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100",
      ghost: "bg-transparent text-white hover:opacity-60 pressed:opacity-30",
      destructive: "bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white",
      icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent",
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
    rounded: true,
  },
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}

// /* Action */

// width: 230px;
// height: 44px;

// font-family: 'SF Pro';
// font-style: normal;
// font-weight: 400;
// font-size: 17px;
// line-height: 20px;
// display: flex;
// align-items: center;
// text-align: center;


// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 1;


// /* Size=Large, State=Idle (Platter), Style=Capsule */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0px 25px;

// position: absolute;
// width: 101px;
// height: 52px;
// left: 180px;
// top: 150px;

// background: linear-gradient(0deg, rgba(94, 94, 94, 0.18), rgba(94, 94, 94, 0.18)), rgba(255, 255, 255, 0.06);
// background-blend-mode: color-dodge, lighten;
// border-radius: 500px;

// /* Size=Regular, State=Idle (Platter), Style=Rounded Rect */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0px 20px;

// position: absolute;
// width: 86px;
// height: 44px;
// left: 180px;
// top: 320px;

// background: linear-gradient(0deg, rgba(94, 94, 94, 0.18), rgba(94, 94, 94, 0.18)), rgba(255, 255, 255, 0.06);
// background-blend-mode: color-dodge, lighten;
// border-radius: 12px;
