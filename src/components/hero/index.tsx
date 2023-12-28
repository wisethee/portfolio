import "./index.css";

const headline = [
  ["C", "r", "a", "f", "t", "i", "n", "g"],
  ["g", "o", "o", "d"],
  ["d", "i", "g", "i", "t", "a", "l"],
  ["s", "t", "o", "r", "i", "e", "s"],
  ["w", "i", "t", "h"],
  ["c", "o", "d", "e"],
];

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
              {word.map((letter, index) => (
                <span key={index} className="mp-hero-title-letter">
                  {letter}
                </span>
              ))}
              {index < headline.length - 1 && (
                <span className="mp-hero-title-space">&nbsp;</span>
              )}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
