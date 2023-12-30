import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDocumentHeight(document.body.clientHeight);
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", () => {
      setDocumentHeight(document.body.clientHeight);
    });

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", () => {
        setDocumentHeight(document.body.clientHeight);
      });
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return documentHeight - windowHeight;
};

// export function useScrollSize() {
//   const [scrollSize, setScrollSize] = useState(0);

//   useEffect(() => {
//     function updateScrollSize() {
//       setScrollSize(window.scrollY);
//     }

//     window.addEventListener("scroll", updateScrollSize);
//     updateScrollSize();

//     return () => window.removeEventListener("scroll", updateScrollSize);
//   }, []);

//   return Math.round(scrollSize);
// }

// export default useScrollSize;
