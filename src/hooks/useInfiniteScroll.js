import { useEffect, useState, useMemo } from 'react';

const useInfiniteScroll = ({
  root = null,
  target,
  threshold = 1,
  rootMargin = '0px',
  targetArray,
  pageSize,
  endPoint = 1,
}) => {
  const [count, setCount] = useState(1);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([{ isIntersecting }], observer) => {
          if (target?.current === null) {
            return;
          }
          if (isIntersecting) {
            setCount((cur) => cur + 1);
            observer.disconnect();
          }
        },
        {
          root,
          rootMargin,
          threshold,
        }
      ),
    [target, root, rootMargin, threshold]
  );

  useEffect(() => {
    if (target?.current === null) {
      return;
    }

    if (pageSize * count <= targetArray.length) {
      observer.observe(target.current.children[target.current.children.length - endPoint]);
    }

    return () => {
      if (target.current !== null && observer) {
        observer.unobserve(target.current);
      }
    };
  }, [count, targetArray, target, pageSize]);

  return {
    count,
    setCount,
  };
};

export default useInfiniteScroll;
