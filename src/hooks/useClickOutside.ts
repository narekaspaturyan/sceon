import { useEffect, useRef, useState } from 'react';

const useClickOutside = (propBool = false, changeShow?: (val: boolean) => void) => {
  let elRef = useRef<any>(null);
  const [bool, setbool] = useState<any>(propBool);

  const handleOutside = (e: { target: any }) => {
    if (elRef && elRef.current) {
      if (elRef.current.contains(e.target)) {
        setbool(true);
        return;
      }
      setbool(false);
      changeShow && changeShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutside);
    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, []);

  return [bool, elRef, setbool];
};

export default useClickOutside;
