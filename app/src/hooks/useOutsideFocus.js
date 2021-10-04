import { useState, useEffect, useCallback } from 'react';

export const useOutsideFocus = (ref) => {
  const [isOutside, setIsOutside] = useState(false);

  const checkOutsideClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOutside(true);
    } else {
      setIsOutside(false);
    }
  }, [setIsOutside, ref]);

  useEffect(() => {

    document.addEventListener("click", checkOutsideClick);
    return () => document.removeEventListener("click", checkOutsideClick);
  }, [ref, checkOutsideClick]);

  return isOutside;
}