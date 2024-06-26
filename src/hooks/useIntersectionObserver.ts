import { RefObject, useState, useEffect } from "react";

interface IntersectionObserverProps {
  target: RefObject<HTMLElement>;
  threshold: number;
}

const useIntersectionObserver = ({
  target,
  threshold,
}: IntersectionObserverProps): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = target.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
      },
      {
        threshold: threshold,
      }
    );

    if (!currentRef) return;
    observer.observe(currentRef);

    return () => {
      if (!currentRef) return;
      observer.unobserve(currentRef);
    };
  }, [target, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
