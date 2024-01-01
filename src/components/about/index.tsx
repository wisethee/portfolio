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

const calculateNormalizedProgress = (
  progress: number,
  start: number,
  end: number
): number => {
  return (progress - start * 3) / (end * 1.5 - start * 3);
};

const calculateThreshold = (index: number, length: number): number => {
  return index / length;
};

const Word = ({ word, index, length, start, end }: WordProps) => {
  const { scrollYProgress } = useScroll();
  const [isActive, setIsActive] = useState(0.3);

  const [spring, api] = useSpring(() => ({}));

  useEffect(() => {
    api.start({
      opacity: scrollYProgress.to((progress: number) => {
        const normalizedProgress = calculateNormalizedProgress(
          progress,
          start,
          end
        );
        const threshold = calculateThreshold(index, length);
        if (normalizedProgress >= threshold) {
          setIsActive(1);
          return 1;
        } else {
          setIsActive(0.3);
          return 0.3;
        }
      }),
    });
  }, [scrollYProgress, api, index, length, start, end]);

  return (
    <animated.span
      className={isActive === 1 ? "mp-about-word is-in-view" : "mp-about-word"}
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
