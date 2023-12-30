import { useEffect, useState } from "react";
import { animated, useInView, useScroll, useSpring } from "@react-spring/web";

import { useScrollY } from "../../hooks";

// Styles
import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

type WordProps = {
  word: string;
  index: number;
  length: number;
  scrollYProgress: any;
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
  const wordStart = (start + (index / length) * (end - start)) / end;
  const wordEnd = (start + ((index + 1) / length) * (end - start)) / end;

  useEffect(() => {
    console.log({ wordStart, wordEnd });

    api({
      opacity: inView
        ? scrollYProgress.to((progress: number) => {
            if (progress < wordStart) {
              return 0.3;
            } else if (progress > wordEnd) {
              return 1;
            } else {
              const opacity =
                (progress - wordStart) / (wordEnd - wordStart) + 0.3;
              return Math.max(0.3, Math.min(1, opacity));
            }
          })
        : 0.3,
    });
  }, [inView, scrollYProgress, start, end, api, wordStart, wordEnd]);

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
  const { scrollY } = useScroll();

  const [start, end] = useScrollY(ref);

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
              scrollYProgress={scrollY}
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
