import { ReactNode, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface TransitionProps {
  transitionKey: number | string;
  animationClass?: string;
  children: ReactNode;
}

export default function Transition({
  transitionKey,
  animationClass,
  children,
}: TransitionProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SwitchTransition>
        <CSSTransition
          classNames={animationClass ?? "slide"}
          nodeRef={nodeRef}
          key={transitionKey}
          addEndListener={(done) => {
            nodeRef.current?.addEventListener("transitionend", done, false);
          }}
        >
          <div ref={nodeRef}>{children}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
