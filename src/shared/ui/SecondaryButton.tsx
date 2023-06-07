import { FC } from "react";
import styles from "./SecondaryButton.module.scss";

type OwnProps = {
  children: React.ReactNode;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const SecondaryButton: FC<OwnProps> = ({children, buttonProps}) => {

  return (
    <button className={styles.root} {...buttonProps} >
      {children}
    </button>
  )
}

export default SecondaryButton;