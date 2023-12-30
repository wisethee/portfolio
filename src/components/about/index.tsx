import { useEffect, useState } from "react";
import { animated, useInView, useSpring, useScroll } from "@react-spring/web";

import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

type WordProps = {
  word: string;
  index: number;
  length: number;
};

const Word = ({ word, index, length }: WordProps) => {
  const { scrollY } = useScroll();

  const [ref, inView] = useInView({
    rootMargin: "0% 0%",
  });

  const springs = useSpring({
    opacity: inView
      ? scrollY.to((position: number) => {
          console.log(position);
        })
      : 0.3,
  });

  return (
    <animated.span key={index} ref={ref} style={springs}>
      {word}
      {index !== length - 1 ? " " : ""}
    </animated.span>
  );
};

const About = () => {
  const [paragraph, setParagraph] = useState<string[]>([]);

  const [ref, inView] = useInView();

  useEffect(() => {
    const documentHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    const maxScroll = documentHeight - windowHeight;

    if (ref.current) {
      const start = ref.current.getBoundingClientRect();
      const end = ref.current.offsetTop + ref.current.clientHeight - maxScroll;
      console.log("start: ", start);
      // console.log("end: ", end);
      // console.log("h", h);
    }
  }, [ref, inView]);

  useEffect(() => {
    setParagraph(defaultParagraph.split(" "));
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-inner">
        <span className="mp-title-large">About</span>
        <div className="mp-about-text mp-display-medium" ref={ref}>
          {paragraph.map((word, index) => (
            <Word
              key={index}
              word={word}
              index={index}
              length={paragraph.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
