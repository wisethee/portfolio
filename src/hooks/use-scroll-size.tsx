import { useEffect, useState } from "react";

export const useScrollY = (ref) => {
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

    const updateDocumentHeight = () => {
      setDocumentHeight(document.body.clientHeight);
    };

    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", () => {
      updateDocumentHeight();
      updateWindowHeight();
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDocumentHeight);
      window.removeEventListener("resize", updateWindowHeight);
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

// type UseScrollYInSection = (sectionRef: React.RefObject<HTMLElement>) => number;

// export const useScrollYInSection = (sectionRef: UseScrollYInSection) => {
//   const [scrollAmount, setScrollAmount] = useState(0);

//   useEffect(() => {
//     const section = sectionRef.current;

//     const handleScroll = () => {
//       if (section) {
//         const sectionTop = section.offsetTop;
//         const scrollY = window.scrollY;
//         const sectionPosition = scrollY - sectionTop;
//         setScrollAmount(sectionPosition);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [sectionRef]);

//   return scrollAmount;
// };
