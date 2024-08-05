import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import Spinner from "@/components/spinner";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  let { children, className, title, loading, disabled, ...otherProps } = props;

  title = loading ? "Loading" : title;

  const isDisabled = loading || disabled;

  return (
    <button
      className={`btn text-gray-100 text-2xl bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white disabled:opacity-65 disabled:cursor-not-allowed ${className}`}
      disabled={isDisabled}
      title={title}
      {...otherProps}
      ref={ref}
    >
      {children}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full grid place-items-center bg-black/50 rounded-lg">
          <Spinner size={30} color="white" />
        </div>
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
