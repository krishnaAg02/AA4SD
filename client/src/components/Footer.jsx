import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Asia-Pacific Association
          </h2>
          <p className="text-sm text-gray-200">
            Advancing excellence in sports dentistry through research,
            collaboration, and global professional networking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Membership</li>
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-200">
            Email: contact.aa4sd@gmail.com
          </p>
          <p className="text-sm text-gray-200 mt-2">
            India 
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition cursor-pointer">
              <FaEnvelope />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AA4SD. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
