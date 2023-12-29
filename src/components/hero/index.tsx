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

type LetterTrailProps = {
  letters: string[];
};

const LetterTrail = ({ letters }: LetterTrailProps) => {
  const trail = useTrail(letters.length, {
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      frequency: 0.18,
    },
    y: 0,
    from: {
      y: 30,
    },
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
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
          {headline.map((word, index) => (
            <span key={index} className="mp-hero-title-word">
              <span key={index} className="mp-hero-title-word-inner">
                <LetterTrail letters={word} />
              </span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
