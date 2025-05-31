
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: string;
}

const FloatingElement = ({ children, delay = "0s" }: FloatingElementProps) => {
  return (
    <div 
      className="animate-float"
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
