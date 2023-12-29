import { animated, useTrail } from "@react-spring/web";

import "./index.css";

const headline = [
  ["C", "r", "a", "f", "t", "i", "n", "g"],
  ["g", "o", "o", "d"],
  ["d", "i", "g", "i", "t", "a", "l"],
  ["s", "t", "o", "r", "i", "e", "s"],
  ["w", "i", "t", "h"],
  ["c", "o", "d", "e"],
];

type HeadlineTrailProps = {
  headline: string[][];
};

type LetterTrailProps = {
  letters: string[];
};

const LetterTrail = ({ letters }: LetterTrailProps) => {
  const lettersTrail = useTrail(letters.length, {
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      frequency: 0.12,
    },
    y: 0,
    from: {
      y: 30,
    },
  });

  return (
    <>
      {lettersTrail.map(({ ...style }, index) => (
        <animated.span
          key={index}
          className="mp-hero-title-letter"
          style={style}
        >
          {letters[index]}
        </animated.span>
      ))}
    </>
  );
};

const HeadlineTrail = ({ headline }: HeadlineTrailProps) => {
  const trail = useTrail(headline.length, {
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      frequency: 0.18,
    },
    y: 0,
    from: {
      y: 960,
    },
  });

  return (
    <>
      {trail.map(({ ...style }, index) => {
        return (
          <span key={index} className="mp-hero-title-word">
            <animated.span className="mp-hero-title-word-inner" style={style}>
              <LetterTrail letters={headline[index]} />
            </animated.span>
          </span>
        );
      })}
    </>
  );
};

const Hero = () => {
  return (
    <section className="mp-hero">
      <div className="mp-hero-inner">
        <p
          className="mp-hero-subtitle mp-title-large"
          aria-label="Marius P. Paduraru"
        >
          Marius P. Paduraru
        </p>
        <h1
          className="mp-hero-title mp-display-large"
          aria-label="Crafting good digital stories with code"
        >
          <HeadlineTrail headline={headline} />
        </h1>
      </div>
    </section>
  );
};

export default Hero;
