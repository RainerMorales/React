import { motion } from "motion/react";

function Header() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ opacity: 1  }} // Final state (opacity 1)
        transition={{ duration:1}} // Duration of 1 second
        className="fixed w-full top-0 left-0 bg-gray-950 shadow-lg backdrop-blur-sm p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-white  text-2xl font-bold">
            <span className="text-indigo-600">Web</span>Dev
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-indigo-900 px-3 py-2 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-900 px-3 py-2 rounded"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-900 px-3 py-2 rounded"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button id="menu-btn" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
export default Header;
