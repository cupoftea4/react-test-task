import { FC } from "react";
import styles from "./AccentButton.module.scss";

type OwnProps = {
  children: React.ReactNode;
}

const AccentButton: FC<OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {

  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  )
}

export default AccentButton;