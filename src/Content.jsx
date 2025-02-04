import { motion } from "motion/react";
function Content() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ opacity: 1 }} // Final state (opacity 1)
        transition={{delay:0.1, duration: 3}} // Duration of 1 second
        className="max-w-4xl m-auto mt-20"
      >
        <div className="grid grid-cols-2 gap-3 p-6 m-2 ">
          <div>
            <img src="profile.jpg" alt="" className="rounded-lg m-auto w-56" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" font-extrabold text-white lg:text-4xl md:text-4xl sm:text-4xl">
              Rainer Morales
            </p>
            <p className="text-white font-extralight  ">Philippines</p>
            <p className="text-white font-extralight">Front-End Developer</p>
            <button className="mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-3 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="rounded-xl bg-gray-900 gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <svg
                style={{ height: "20px" }}
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG content */}
              </svg>
              <p className="text-white font-extrabold text-lg">About</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              I aim to secure a position in the IT or management sectors, which
              will allow me to utilize my education and skills to contribute to
              the company's operations.
            </p>
          </div>
          <div className="rounded-xl bg-gray-900 gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <p className="text-white font-extrabold text-lg">Education</p>
            </div>
            <div className="font-medium text-white">
              <p className="px-7 mt-2">
                Eastwoods Professional College of Science and Technology
                <br />
                <span className="font-light">
                  Bachelor of Science in Information Technology
                  <br />- 2020-2024
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl gap-3 p-6 m-2 bg-gray-900">
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-500 mr-2"></div>
            <span className="text-center text-white text-2xl font-bold">
              WHAT I DO
            </span>
            <div className="flex-1 border-t border-gray-500 ml-2"></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 p-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img
                className="w-20 m-auto"
                src="/front.png"
                alt="Front-End Development"
              />
              <p className="text-center font-bold text-indigo-600">
                Front-End Development
              </p>
              <p className="text-center font-light m-auto py-4">
                Front-end Developer specializing in HTML, CSS, and JavaScript,
                with experience using JS frameworks like ReactJS.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img
                className="w-20 m-auto"
                src="/responsive.png"
                alt="Responsive Design"
              />
              <p className="text-center font-bold text-indigo-600">
                Responsive Design
              </p>
              <p className="text-center font-light m-auto py-4">
                Experience in creating responsive designs that adapt seamlessly
                to different screen sizes and devices.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img className="w-20 m-auto" src="/ui.png" alt="UI/UX Design" />
              <p className="text-center font-bold text-indigo-600">
                UI/UX Design
              </p>
              <p className="text-center font-light m-auto py-4">
                Good UI/UX design helps users navigate the site easily, and I
                implement that through clean front-end development.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </>
  );
}

export default Content;
