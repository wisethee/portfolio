import { useEffect, useState, forwardRef, useRef } from "react";
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
};

const Word = ({ word, index, length, scrollYProgress }: WordProps) => {
  const [ref, inView] = useInView({
    rootMargin: "-9% 0%",
  });

  const [spring, set] = useSpring(() => ({
    opacity: inView ? 1 : 0,
  }));

  useEffect(() => {
    set({
      opacity: scrollYProgress.to((progress: number) => {
        // console.log(Math.round(progress));
      }),
    });
  }, [inView]);

  return (
    <animated.span className="mp-about-word" ref={ref} style={spring}>
      {word}
      {index !== length - 1 ? " " : ""}
    </animated.span>
  );
};

const About = forwardRef(() => {
  const [paragraph, setParagraph] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [columnRef, inView] = useInView();
  const { scrollY } = useScroll();

  const scrollSize = useScrollY(columnRef);

  useEffect(() => {
    if (!loading && inView) {
      console.log(scrollSize);

      // const columnHeight = columnRef.current?.offsetHeight;
      // const columnOffset = columnRef.current?.offsetTop;
      // const windowHeight = window.innerHeight;
      // console.log(columnOffset - windowHeight);
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
            <Word
              key={index}
              word={word}
              index={index}
              length={paragraph.length}
              scrollYProgress={scrollY}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default About;
