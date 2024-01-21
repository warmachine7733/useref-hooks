import { useRef, useEffect } from "react";

export const InputRef = () => {
  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.focus();
  }, []);
  return <input ref={inputElement} type="text" placeholder="refFocus" />;
};
