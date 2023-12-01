import React from "react";
import classes from "./MyModal.module.css";

type MyModalType = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyModal: React.FC<MyModalType> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.background];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.myModal} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
      </div>
    </div>
  );
};

export default MyModal;

