import React, { useEffect } from 'react';
import classes from "./useIntersectionObserver.module.css"

const useIntersectionObserver = (observedElements, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    observedElements.forEach((element) => {
        // console.log(element)
      if (element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      observedElements.forEach((element) => {
        if (element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const element = observedElements.find((item) => {
        return item.current === entry.target;
      });

      if (entry.intersectionRatio >= 0.5) {
        entry.target.classList.add(classes.block);
        // entry.target.classList.remove(element.classToRemove);
      } else {
        // entry.target.classList.remove(classes.block);
        // entry.target.classList.add(classes.block);
      }
    });
  };
};

export default useIntersectionObserver;