import React, { useRef, useEffect } from "react";
import classes from "./ModalProduct.module.css";

type MyModalType = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalProduct: React.FC<MyModalType> = ({ children, visible, setVisible }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (modalRef.current && visible) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          modalRef.current.scrollTop += e.deltaY;
        }
      }
    };

    if (visible) {
      document.body.style.overflow = "hidden";
      modalRef.current?.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      modalRef.current?.removeEventListener("wheel", handleScroll);
    }
    return () => {
      document.body.style.overflow = "auto";
      modalRef.current?.removeEventListener("wheel", handleScroll);
    };
  }, [visible]);

  const rootClasses = visible ? `${classes.myModal} ${classes.active}` : `${classes.myModal}`;

  return (
    <div ref={modalRef} className={rootClasses} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalProduct;
