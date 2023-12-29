import { useEffect, useRef, useState } from "react";

import "./index.css";

const text =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

const About = () => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [maxCharsPerLine, setMaxCharsPerLine] = useState(0);
  const [wrappedLines, setWrappedLines] = useState("");

  useEffect(() => {
    const calculateMaxCharsPerLine = () => {
      if (containerRef.current) {
        let newMaxChars = 40; // Default value
        const viewportWidth = window.innerWidth;

        // Adjust the maxCharsPerLine based on viewport width
        if (viewportWidth <= 600) {
          newMaxChars = 20; // Adjust for smaller screens
        }

        // Update state with the new value
        setMaxCharsPerLine(
          Math.floor(containerRef.current.offsetWidth / newMaxChars)
        );
      }
    };

    const splitIntoLines = () => {
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";

      words.forEach((word) => {
        if ((line + word).length <= maxCharsPerLine) {
          line += word + " ";
        } else {
          lines.push(line.trim());
          line = word + " ";
        }
      });

      // Push the remaining words as the last line
      if (line.trim().length > 0) {
        lines.push(line.trim());
      }

      setWrappedLines(lines.map((line) => `<span>${line}</span>`).join(""));
    };

    calculateMaxCharsPerLine();
    splitIntoLines();

    const handleResize = () => {
      calculateMaxCharsPerLine();
      splitIntoLines();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxCharsPerLine]);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-inner" ref={containerRef}>
        <span className="mp-title-large">About</span>
        <div
          className="mp-about-text mp-display-medium"
          dangerouslySetInnerHTML={{ __html: wrappedLines }}
        />
      </div>
    </div>
  );
};

export default About;
