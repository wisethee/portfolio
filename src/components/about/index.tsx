import { useEffect, useState } from "react";
import { animated, useInView, useScroll } from "@react-spring/web";

import { useScrollY } from "../../hooks";

// Styles
import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

const About = () => {
  const [paragraph, setParagraph] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollSize = useScrollY();
  const [columnRef, inView] = useInView();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!loading && inView) {
      console.log(scrollSize);
    } else {
      setLoading(false);
    }
  }, [inView, loading, scrollSize]);

  useEffect(() => {
    setParagraph(defaultParagraph.split(" "));
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-column" ref={columnRef}>
        <span className="mp-title-large">About</span>
        <div className="mp-about-paragraph mp-display-medium">
          {paragraph.map((word, index) => (
            <animated.span className="mp-about-word" key={index}>
              {word}
              {index !== paragraph.length - 1 ? " " : ""}
            </animated.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
