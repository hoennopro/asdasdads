import styles from "./BaseAlert.module.css";

interface BaseAlertProps {
  type: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
}

const BaseAlert: React.FC<BaseAlertProps> = ({ type, children }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};

export default BaseAlert;
