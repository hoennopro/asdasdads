import styles from "./BaseButton.module.css";

interface BaseButtonProps {
  type: "primary" | "success" | "warning" | "danger";
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ type, children }) => {
  return <button className={styles[type]}>{children}</button>;
};

export default BaseButton;
