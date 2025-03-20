import { motion } from "motion/react";

function Header() {
  return (
    <>
      
      <motion.nav
        initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
        transition={{ delay: 1, duration: 0.5 }} // Duration of 1 second
        className="fixed w-full top-0 left-0 p-4 z-50 bg-black shadow-lg shadow-black"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="index.html" className="text-info text-2xl font-bold">
            Port<span className="text-white">folio</span>
          </a>
        </div>
      </motion.nav>
    </>
  );
}
export default Header;
