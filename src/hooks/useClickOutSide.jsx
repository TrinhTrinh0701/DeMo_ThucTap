import { useEffect, useRef, useState } from "react";

export default function useClikOutSide(dom = "button") {
  const [show, setShow] = useState(false); // false để mặc định nó ko hiện ra
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return {
    nodeRef,
    show,
    setShow,
  };
}
