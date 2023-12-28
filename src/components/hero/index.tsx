import "./index.css";

const Hero = () => {
  return (
    <section className="mp-hero">
      <div className="col-span-4 sm:col-span-6 sm:col-start-2 md:col-start-4 flex flex-col gap-y-6-12 items-center justify-center">
        <span className="text-title-large uppercase">Marius P. Paduraru</span>
        <div className="flex flex-col items-center text-display-large uppercase">
          <span>Crafting</span>
          <span>good</span>
          <span className="text-primary">digital</span>
          <span className="text-primary">stories</span>
          <span>with</span>
          <span>code</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
