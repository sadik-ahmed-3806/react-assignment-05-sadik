const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-5 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          LEFT: Headline, copy, CTAs
      ====================================================== */}
      <div className="flex flex-1 flex-col text-center lg:text-left">
        <h1 className="text-[42px] font-extrabold leading-[1.15] text-gray-900 sm:text-[52px] lg:text-[56px]">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[480px] text-[15px] leading-relaxed text-gray-500 lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-3 text-[14px] font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* =====================================================
          RIGHT: Isometric graphic

          Image location:
          public/assets/hero-graphic.png

          If you use a different location, change the src.
      ====================================================== */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="/banner-stack.png"
          alt="Isometric illustration of a development stack"
          className="w-full max-w-[380px] lg:max-w-[420px]"
        />
      </div>
    </section>
  );
};

export default Hero;