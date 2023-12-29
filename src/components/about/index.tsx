import { useEffect, useRef, useState } from "react";

import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

const About = () => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [paragraph, setParagraph] = useState<string[]>([]);

  useEffect(() => {
    const t = defaultParagraph.split(" ");
    setParagraph(t);

    console.log(paragraph);
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-inner" ref={containerRef}>
        <span className="mp-title-large">About</span>
        <div className="mp-about-text mp-display-medium">
          {paragraph.map((word, index) => (
            <span key={index}>
              {word}
              {index !== paragraph.length - 1 ? " " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
