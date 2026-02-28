import { FaUserTie, FaNetworkWired, FaUsers, FaBook, FaChartLine, FaStar } from "react-icons/fa";

const benefits = [
  { icon: <FaUserTie />, title: "Professional Recognition", desc: "Join a globally recognized body advancing excellence." },
  { icon: <FaStar />, title: "Exclusive Access", desc: "Priority access to conferences and events." },
  { icon: <FaNetworkWired />, title: "Networking", desc: "Connect with professionals worldwide." },
  { icon: <FaBook />, title: "Education", desc: "Access latest research and resources." },
  { icon: <FaUsers />, title: "Community", desc: "Be part of global network." },
  { icon: <FaChartLine />, title: "Growth", desc: "Contribute to projects shaping the future." },
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-white dark:bg-gray-950 transition">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          Benefits of Membership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-6 shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl">
                {item.icon}
              </div>

              <div className="ml-6">
                <h3 className="text-lg font-semibold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
