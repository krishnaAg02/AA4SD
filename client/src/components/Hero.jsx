const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Connecting Professionals Worldwide
          </h1>
          <p className="mb-8 text-lg">
            Empowering global excellence through education, innovation,
            and collaboration.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-red-600 px-6 py-3 rounded-lg"
          >
            Join Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          className="rounded-xl shadow-lg"
          alt="team"
        />

      </div>
    </section>
  );
};

export default Hero;
