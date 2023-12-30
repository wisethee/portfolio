import { useEffect, useState } from "react";

import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

const About = () => {
  const [paragraph, setParagraph] = useState<string[]>([]);

  useEffect(() => {
    setParagraph(defaultParagraph.split(" "));
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-inner">
        <span className="mp-title-large">About</span>
        <div className="mp-about-text mp-display-medium">
          {paragraph.map((word, index) => (
            <span key={index}>
              {word}
              {index !== length - 1 ? " " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
