import { useEffect, useRef } from "react";

function useOutsideClick(handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log('clicked outside');
          handler();
        }
      }

      function handleScroll() {
        console.log("Scrolling detected");
        handler(); // Закрытие меню при скролле
      }

      window.addEventListener("scroll", handleScroll, true);

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [handler]
  );

  return ref;
}

export default useOutsideClick;
