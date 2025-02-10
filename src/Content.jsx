import { motion } from "motion/react";

function Content() {
  const message = () => {
    alert("Coming Soon!");
  };
  return (
    <>
      <motion.main
        initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
        transition={{ delay: 0.2, duration: 0.5 }} // Duration of 1 second
        className="max-w-4xl m-auto mt-20"
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 p-6 m-2 ">
          <div>
            <img src="profilee.jpg" alt="" className="rounded-lg m-auto w-56" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" font-extrabold text-white text-4xl">
              Rainer Morales
            </p>
            <p className="text-white font-extralight  ">Philippines</p>
            <p className="text-white font-extralight">Web Developer</p>
            <div className="flex flex-row gap-6 w-30 justify-center items-center mt-7">
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
        </div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className=" gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <svg
                style={{ height: "20px" }}
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="about-white"
                  fill="#ffffff"
                  transform="translate(42.666667, 42.666667)"
                >
                  <path
                    d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                    id="Shape"
                  ></path>
                </g>
              </svg>
              <p className="text-white font-extrabold text-lg">About</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              I aim to secure a position in the IT or management sectors, which
              will allow me to utilize my education and skills to contribute to
              the company's operations.
            </p>
          </div>
          <div className="  gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <img
                style={{ height: "20px", width: "20px" }}
                src="education.png"
                alt=""
              />
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
          <div className=" gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <img
                style={{ height: "20px", width: "20px" }}
                src="briefcase.png"
                alt=""
              />
              <p className="text-white font-extrabold text-lg">Experience</p>
            </div>
            <div className="font-medium text-white">
              <p className="px-7 mt-2">
                Centro Medico De Santisimo Rosario
                <br />
                <span className="font-light">
                  Technical Support - Intern
                  <br />
                  March 2024 - June 2024
                </span>
              </p>
            </div>
          </div>
          <div className=" gap-3 p-6 m-2">
            <div className="flex items-center gap-2">
              <img
                style={{ height: "20px", width: "20px" }}
                src="code.png"
                alt=""
              />
              <p className="text-white font-extrabold text-lg">Tech Stack</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 px-7 mt-2">
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                HTML
              </span>
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                CSS
              </span>
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                Javascript
              </span>
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                Bootstrap
              </span>
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                Tailwind CSS
              </span>
              <span className="text-white border-2 border-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                React JS
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
          animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
          transition={{ delay: 0.4, duration: 0.5 }}
          className="rounded-xl gap-3 p-6 m-2 "
        >
          <div className="m-auto text-center text-white text-2xl font-bold">
            WHAT I DO
          </div>
          <div className="text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 p-6">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="border-4 border-gray-900 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img
                className="w-20 m-auto"
                src="front.png"
                alt="Front-End Development"
              />
              <p className=" text-center font-bold text-white">
                Front-End Development
              </p>
              <p className="text-center font-light m-auto py-4">
                Front-end Developer specializing in HTML, CSS, and JavaScript,
                with experience using JS frameworks like ReactJS.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ delay: 0.5, opacity: 1 }}
              className="border-4 border-gray-900 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img
                className="w-20 m-auto"
                src="responsive.png"
                alt="Responsive Design"
              />
              <p className="text-center font-bold text-white">
                Responsive Design
              </p>
              <p className="text-center font-light m-auto py-4">
                Experience in creating responsive designs that adapt seamlessly
                to different screen sizes and devices.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="border-4 border-gray-900 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
            >
              <img
                className="w-20 m-auto"
                src="design.png"
                alt="UI/UX Design"
              />
              <p className="text-center font-bold text-white">UI/UX Design</p>
              <p className="text-center font-light m-auto py-4">
                Good UI/UX design helps users navigate the site easily, and I
                implement that through clean front-end development.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="fixed bottom-6 right-3 mx-w-20 ">
          <button
            onClick={message}
            type="button"
            class="flex m-auto items-center text-black  bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-bold rounded-4xl text-sm px-7 py-2.5 whitespace-normal "
          >
            <span>
              <img src="text.gif" alt="" width={30} />
            </span>
            Message Me!
          </button>
        </div>
      </motion.main>
    </>
  );
}

export default Content;