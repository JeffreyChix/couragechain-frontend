import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <button
      className={`btn text-gray-100 text-2xl bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white ${className}`}
      {...otherProps}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
