import { useRef, useCallback } from 'react';

type Callback<T extends unknown[], R> = (...args: T) => R;

const useEffectEvent = <T extends unknown[], R>(callback: Callback<T, R>): Callback<T, R> => {
  const ref = useRef(callback);
  ref.current = callback;

  return useCallback((...args: T) => {
    return ref.current(...args);
  }, []);
};

export default useEffectEvent;
