import { motion } from "motion/react";

function Header() {
  return (
    <>
      <motion.nav
        initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
        transition={{ delay: 2, duration: 0.5 }} // Duration of 1 second
        className="fixed w-full top-0 left-0 bg-gray-950 shadow-lg  backdrop-blur-sm p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="index.html" className="text-white  text-2xl font-extrabold">
            <span className="text-blue-600">Port</span>folio
          </a>
          <div className="hidden md:flex gap-6 w-30">
            <a href="">
              <img src="github.png" alt="" />
            </a>
            <a href="https://www.facebook.com/ka.rainerr">
              <img src="facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/ka.rainer">
              <img src="instagram.png" alt="" />
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
  {
    /* <div className="hidden gap-6 w-35 mt-7">
              
            </div> */
  }
}
export default Header;
