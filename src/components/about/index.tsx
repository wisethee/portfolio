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
    rootMargin: "0% 0%",
  });

  const { scrollYProgress } = useScroll();

  const [spring, api] = useSpring(() => ({
    opacity: inView ? 1 : 0,
  }));

  useEffect(() => {
    api.start({
      opacity: inView
        ? scrollYProgress.to((progress: number) => {
            console.log(progress);
            return 1;
          })
        : 0.3,
    });
  }, [inView, scrollYProgress, api]);

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
    <div id="about" className="mp-about" ref={ref}>
      <div className="mp-about-column">
        <span className="mp-title-large">About</span>
        <div className="mp-about-paragraph mp-display-medium">
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
