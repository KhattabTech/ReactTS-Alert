import { ReactNode, useState } from "react";
import { X } from "lucide-react";
import "./index.scss";
import { AlertTypes } from "../types";
interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-default",
  title,
  icon,
  description,
  children,
}: IProps) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} onClick={() => setVisible(false)} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
