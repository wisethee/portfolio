import { useEffect, useRef, useState } from "react";
import { animated, useScroll, useSpring } from "@react-spring/web";

import { useScrollPosition } from "../../hooks";

// Styles
import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

type WordProps = {
  word: string;
  index: number;
  length: number;
  start: number;
  end: number;
};

const Word = ({ word, index, length, start, end }: WordProps) => {
  const { scrollYProgress } = useScroll();
  const [opacity, setOpacity] = useState(0.3);

  const [spring, api] = useSpring(() => ({}));

  useEffect(() => {
    api.start({
      opacity: scrollYProgress.to((progress: number) => {
        // Calculate the normalized progress (0 to 1) within the scroll range
        const normalizedProgress =
          (progress - start * 2.4) / (end * 1.2 - start * 2.4);
        // Calculate the threshold for each word based on its index
        const threshold = index / length;
        // If the normalized progress is past the threshold, set the opacity to 1
        if (normalizedProgress >= threshold) {
          setOpacity(1);
          return 1;
        }
        // If the normalized progress is less than the threshold, set the opacity to 0.3
        else {
          setOpacity(0.3);
          return 0.3;
        }
      }),
    });
  }, [scrollYProgress, api, index, length, start, end]);

  return (
    <animated.span
      className={`mp-about-word ${opacity === 1 ? "is-in-view" : ""}`}
      style={spring}
    >
      {word}
      {index !== length - 1 ? " " : ""}
    </animated.span>
  );
};

const About = () => {
  const [paragraph, setParagraph] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null!);

  const [start, end] = useScrollPosition(ref);

  useEffect(() => {
    setParagraph(defaultParagraph.split(" "));
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-column">
        <span className="mp-title-large">About</span>
        <div className="mp-about-paragraph mp-display-medium" ref={ref}>
          {paragraph.map((word, index) => (
            <Word
              key={index}
              word={word}
              index={index}
              length={paragraph.length}
              start={start}
              end={end}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
