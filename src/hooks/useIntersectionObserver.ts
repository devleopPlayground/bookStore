import { useEffect, useRef } from "react";

type Callback = (entries: IntersectionObserverEntry[]) => void;

type ObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  callback: Callback,
  options?: ObserverOptions
) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options, targetRef]);

  return targetRef;
};

export default useIntersectionObserver;
