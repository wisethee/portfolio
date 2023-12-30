import { useEffect, useState } from "react";

export const useScrollY = (ref) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const updateDocumentHeights = () => {
      setWindowHeight(window.innerHeight);
    };

    updateDocumentHeights();

    window.addEventListener("resize", updateDocumentHeights);

    return () => {
      window.removeEventListener("resize", updateDocumentHeights);
    };
  }, []);

  useEffect(() => {
    const columnOffset = ref.current.offsetTop;
    const columnHeight = ref.current.offsetHeight;
    setStart(columnOffset - windowHeight);
    setEnd(columnHeight);

    console.log(columnOffset, columnHeight);
  }, [ref, windowHeight]);

  return [start, end];
};
