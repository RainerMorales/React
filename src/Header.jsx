import { motion } from "motion/react";

function Header() {
  return (
    <>
      <motion.nav
        initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
        transition={{ delay: 1, duration: 0.5 }} // Duration of 1 second
        className="fixed w-full top-0 left-0 bg-gray-950 shadow-lg  backdrop-blur-sm p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="index.html" className="text-white  text-2xl font-extrabold">
            <span className="text-blue-600">Port</span>folio
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-blue-600 font-bold hover:text-blue-700 px-3 py-2 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="text-blue-600 font-bold hover:text-blue-700 px-3 py-2 rounded"
            >
              About
            </a>
            <a
              href="#"
              className="text-blue-600 font-bold hover:text-blue-700 px-3 py-2 rounded"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
export default Header;
