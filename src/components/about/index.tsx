import { useEffect, useState } from "react";
import {
  SpringValue,
  animated,
  useInView,
  useScroll,
  useSpring,
} from "@react-spring/web";

import { useScrollPosition } from "../../hooks";

// Styles
import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

type WordProps = {
  word: string;
  index: number;
  length: number;
  scrollYProgress: SpringValue<number>;
  start: number;
  end: number;
};

const Word = ({
  word,
  index,
  length,
  scrollYProgress,
  start,
  end,
}: WordProps) => {
  const [ref, inView] = useInView({
    rootMargin: "-18% 0%",
  });

  const [spring, api] = useSpring(() => ({
    opacity: inView ? 1 : 0,
  }));

  // Calculate the range for this word
  const scrollRange = end - start;
  const wordPosition = (index + 1) / length;
  const wordStart = start + wordPosition * scrollRange;

  useEffect(() => {
    inView && console.log(word);
  }, [inView]);

  useEffect(() => {
    api({
      opacity: inView
        ? scrollYProgress.to((progress: number) => {
            if (progress < start) {
              return 0.3;
            } else if (progress > end) {
              return 1;
            } else {
              const opacity = Math.max(
                0.3,
                Math.min(1, (progress - wordStart) / scrollRange + 0.3)
              );
              return opacity;
            }
          })
        : 0.3,
    });
  }, [inView, scrollYProgress, start, end, api, wordStart, scrollRange]);

  return (
    <animated.span className="mp-about-word" ref={ref} style={spring}>
      {word}
      {index !== length - 1 ? " " : ""}
    </animated.span>
  );
};

const About = () => {
  const [paragraph, setParagraph] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();
  const { scrollYProgress } = useScroll();

  const [start, end] = useScrollPosition(ref);

  useEffect(() => {
    if (!loading && inView) {
      console.log({ start, end });
    } else {
      setLoading(false);
    }
  }, [inView, loading, start, end]);

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
              scrollYProgress={scrollYProgress}
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
