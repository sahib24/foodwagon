import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#212121] text-gray-300 px-4 sm:px-6 py-10 text-sm">
      <div className="custom-container">
        <div className="border-b border-[#424242] pb-10">
          <h4 className="text-[20px] text-white mb-6">Our top cities</h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {[
              ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
              [
                "Los Angeles",
                "Washington DC",
                "Seattle",
                "Portland",
                "Nashville",
              ],
              [
                "New York City",
                "Orange County",
                "Atlanta",
                "Charlotte",
                "Denver",
              ],
              [
                "Chicago",
                "Phoenix",
                "Las Vegas",
                "Sacramento",
                "Oklahoma City",
              ],
              [
                "Columbus",
                "New Mexico",
                "Albuquerque",
                "Sacramento",
                "New Orleans",
              ],
            ].map((group, idx) => (
              <div key={idx}>
                <ul className="space-y-1">
                  {group.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between sm:gap-10 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mb-0 mb-8 w-full md:w-2/3">
            <div>
              <h5 className="text-[20px] text-white mb-4">Company</h5>
              <ul className="space-y-1">
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[20px] text-white mb-4">Contact</h5>
              <ul className="space-y-1">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[20px] text-white mb-4">Legal</h5>
              <ul className="space-y-1">
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h5 className="font-semibold text-white mb-3">FOLLOW US</h5>
            <div className="flex space-x-4 text-white text-lg mb-5">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
            <p className="text-sm mb-2">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center bg-[#3a3a3a] px-3 py-2 rounded w-full">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
                />
              </div>
              <button className="bg-gradient-to-r from-yellow-500 cursor-pointer to-orange-500 text-white font-semibold px-4 py-2 rounded transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#424242] pt-4 text-sm text-gray-400 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-2 md:mb-0">
              All rights Reserved ©{" "}
              <span className="text-white font-semibold">
                Your Company, 2021
              </span>
            </p>
            <p>
              Made with <span className="text-yellow-500">💛</span> by{" "}
              <span className="font-semibold text-white">Themewagon</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
