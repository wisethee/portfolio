import { useEffect, useRef, useState } from "react";
import { animated, useInView, useScroll, useSpring } from "@react-spring/web";

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
  const [ref, inView] = useInView({
    rootMargin: "-30% 0%",
  });

  const { scrollYProgress } = useScroll();

  const [spring, api] = useSpring(() => ({
    opacity: inView ? 1 : 0,
  }));

  useEffect(() => {
    api.start({
      opacity: scrollYProgress.to((progress: number) => {
        // Calculate the normalized progress (0 to 1) within the scroll range
        const normalizedProgress = (progress - start) / (end - start);
        // Calculate the threshold for each word based on its index
        const threshold = index / length;
        // If the normalized progress is past the threshold, set the opacity to 1
        if (normalizedProgress >= threshold) {
          return 1;
        }
        // If the normalized progress is less than the threshold, set the opacity to 0.3
        else {
          return 0.3;
        }
      }),
    });
  }, [scrollYProgress, api, index, length, start, end]);

  return (
    <animated.span className="mp-about-word" ref={ref} style={spring}>
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
