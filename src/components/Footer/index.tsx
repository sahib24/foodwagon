export default function Footer() {
  return (
    <footer className="bg-[#212121] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-b border-gray-700 pb-10">
          <div>
            <h4 className="font-semibold mb-2 text-white">Our top cities</h4>
            <ul className="space-y-1">
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-6 md:mt-8">
              <li>Los Angeles</li>
              <li>Washington DC</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Nashville</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-6 md:mt-8">
              <li>New York City</li>
              <li>Orange County</li>
              <li>Atlanta</li>
              <li>Charlotte</li>
              <li>Denver</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-6 md:mt-8">
              <li>Chicago</li>
              <li>Phoenix</li>
              <li>Las Vegas</li>
              <li>Sacramento</li>
              <li>Oklahoma City</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-6 md:mt-8">
              <li>Columbus</li>
              <li>New Mexico</li>
              <li>Albuquerque</li>
              <li>Sacramento</li>
              <li>New Orleans</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <div>
            <h5 className="font-semibold text-white mb-2">Company</h5>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Contact</h5>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Legal</h5>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Follow Us</h5>
            <div className="flex space-x-3 text-white text-lg">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="mt-4 mb-2 text-sm">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex  rounded gap-2">
              <input
                type="email"
                placeholder="Enter Your email"
                className="px-3 py-2 w-full text-white rounded hover:border bg-[#ADADAD]"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600  font-bold px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5F5F5] pt-4 text-sm text-center text-gray-400">
          <p>
            All rights reserved ©{" "}
            <span className="text-white font-semibold">Your Company, 2021</span>
          </p>
          <p className="mt-1">
            Made with <span className="text-yellow-500"></span> by
            <span className="font-semibold text-white">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
