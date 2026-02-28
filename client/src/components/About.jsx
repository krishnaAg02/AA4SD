import logo from "../assets/logo.png"; // your logo file
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Image */}
        <div>
          <img
            src={logo} 
            alt="Sports Dentistry"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-900 dark:text-white">
            About AA4SD
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The <span className="font-semibold">Asia-Pacific Association for Sports Dentistry (AA4SD)</span> 
            is a leading professional organization dedicated to advancing excellence 
            in sports dentistry across the Asia-Pacific region and beyond.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We bring together dentists, researchers, sports medicine professionals, 
            and healthcare leaders committed to improving athlete oral health, 
            performance, and injury prevention.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Through international conferences, research collaborations, and educational programs,
            AA4SD promotes innovation and evidence-based practice in sports dentistry worldwide.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✔ Promote awareness of sports-related dental injuries</li>
            <li>✔ Encourage preventive and protective dental solutions</li>
            <li>✔ Support global research and academic excellence</li>
            <li>✔ Foster international professional collaboration</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
