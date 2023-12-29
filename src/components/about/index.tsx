import { useEffect, useRef, useState } from "react";
import { animated, useInView, useSpring, useScroll } from "@react-spring/web";

import "./index.css";

const defaultParagraph =
  "I'm a web developer who finds beauty in simplicity. My love for coding drives me to craft efficient solutions that highlight the inherent simplicity hidden within every project.";

const About = () => {
  const container = useRef<HTMLDivElement>(null!);
  const [paragraph, setParagraph] = useState<string[]>([]);

  const [ref, inView] = useInView({
    rootMargin: "0% 0%",
  });

  const { scrollYProgress } = useScroll();

  const springs = useSpring({
    opacity: inView
      ? scrollYProgress.to((position) => {
          console.log(position);
        })
      : 0.3,
  });

  useEffect(() => {
    const documentHeight = document.body.clientHeight;

    if (container.current) {
      const start = container.current.offsetTop;
      const end = container.current.offsetTop + container.current.clientHeight;
      console.log("a: ", start / documentHeight);
      console.log("b: ", end / documentHeight);
    }
  }, [inView]);

  useEffect(() => {
    setParagraph(defaultParagraph.split(" "));
  }, []);

  return (
    <div id="about" className="mp-about">
      <div className="mp-about-inner">
        <span className="mp-title-large">About</span>
        <div className="mp-about-text mp-display-medium" ref={container}>
          {paragraph.map((word, index) => (
            <animated.span key={index} ref={ref} style={springs}>
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
