import { useEffect, useState } from "react";

// export const useScrollPosition = (ref) => {
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

//   const [start, setStart] = useState(0);
//   const [end, setEnd] = useState(0);

//   useEffect(() => {
//     const updateDocumentHeights = () => {
//       setWindowHeight(window.innerHeight);
//     };

//     updateDocumentHeights();

//     window.addEventListener("resize", updateDocumentHeights);

//     return () => {
//       window.removeEventListener("resize", updateDocumentHeights);
//     };
//   }, []);

//   useEffect(() => {
//     const columnOffset = ref.current.offsetTop;
//     const columnHeight = ref.current.offsetHeight;
//     setStart(columnOffset - windowHeight);
//     setEnd(columnHeight);
//   }, [ref, windowHeight]);

//   return [start, end];
// };

export const useScrollPosition = (ref) => {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const updateDocumentHeights = () => {
      setDocumentHeight(document.body.clientHeight);
      setWindowHeight(window.innerHeight);
    };

    updateDocumentHeights();

    const observer = new MutationObserver(() => {
      updateDocumentHeights();
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", updateDocumentHeights);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDocumentHeights);
    };
  }, []);

  useEffect(() => {
    const maxScroll = documentHeight - windowHeight;
    const columnOffset = ref.current.offsetTop;
    const columnHeight = ref.current.offsetHeight;

    setStart((columnOffset - windowHeight) / maxScroll);
    setEnd(start + columnHeight / maxScroll);
  }, [ref, windowHeight, documentHeight, start, end]);

  return [start, end];
};
