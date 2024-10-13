import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log('clicked outside');
          handler();
        }
      }

      function handleScroll(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Scrolling detected");
          handler(); // Закрытие меню при скролле
        }
      }

      window.addEventListener("scroll", handleScroll, listenCapturing);

      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        window.removeEventListener("scroll", handleScroll, listenCapturing);
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
