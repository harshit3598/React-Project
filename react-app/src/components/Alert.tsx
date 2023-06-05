import { ReactNode } from "react";

interface AlertProps {
  //to pass HTML content and children keyword for parent component and child component
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
