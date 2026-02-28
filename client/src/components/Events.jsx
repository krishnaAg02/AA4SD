const Events = () => {
  return (
    <section id="events" className="py-24 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Upcoming Events
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
              alt="event"
            />
            <div className="p-6">
              <h3 className="font-semibold dark:text-white">
                Global Conference 2026
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Join industry leaders from across the world.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
