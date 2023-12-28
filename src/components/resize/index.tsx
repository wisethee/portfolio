import { useState, useEffect } from "react";
import { cls } from "../../utils";

import "./index.css";

const Resize = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  // State to hold window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Debounce function
  const debounce = (func: (ev: UIEvent | undefined) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | undefined;
    return (...args: Parameters<typeof func>) => {
      clearTimeout(timeoutId as NodeJS.Timeout);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to handle window resize
  const handleResize = debounce((ev: UIEvent | undefined) => {
    const targetWindow = ev ? (ev.target as Window) : window;
    setWindowSize({
      width: targetWindow.innerWidth,
      height: targetWindow.innerHeight,
    });

    setShowOverlay(false);
  }, 600);

  const handleResizeEnd = () => {
    setShowOverlay(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeEnd);
    handleResize(undefined);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeEnd);
    };
  }, []);

  document.documentElement.style.setProperty(
    "--width",
    `${windowSize.width}px`
  );
  document.documentElement.style.setProperty(
    "--height",
    `${windowSize.height}px`
  );

  return (
    <div
      className={cls(
        "mp-resize",
        showOverlay ? "mp-resize__visible" : "mp-resize__hidden"
      )}
    ></div>
  );
};

export default Resize;
