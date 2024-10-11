import { useEffect, useState } from "react";

function useLocalStorage(initState, key) {
  const [value, setValue] = useState(function () {
    const storedVal = localStorage.getItem(key);
    return storedVal ? JSON.parse(storedVal) : initState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}

export default useLocalStorage;
