import { useState, useEffect } from 'react';

export const useOutsideFocus = (ref) => {
  const [isOutside, setIsOutside] = useState(false);
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOutside(true);
      } else {
        setIsOutside(false);
      }
    }

    document.addEventListener("click", checkOutsideClick);
    return () => document.removeEventListener("click", checkOutsideClick);
  }, [ref]);

  return isOutside;
}