declare module 'react-animated-numbers' {
  import { ComponentType } from 'react';

  // If you are unsure about the props of AnimatedNumbers, you can do something like this
  interface AnimatedNumbersProps {
    animateToNumber: number;
    locale: string;
    className: string;
    configs: (idx: number) => { mass: number; friction: number; tensions: number };
  }

  // Use React.ComponentType for a functional component
  const AnimatedNumbers: ComponentType<AnimatedNumbersProps>;
  export default AnimatedNumbers;
}
