import { motion } from "motion/react";

function Content() {
  const message = () => {
    document.getElementById("messages").innerHTML = `
    <div id="alert-1" class="justify-center flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
      <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Under Development! </span>
      </div>
    </div> `;
    setTimeout(() => {
      let alertBox = document.getElementById("alert-1");
      if (alertBox) {
        alertBox.classList.add(
          "opacity-0",
          "transition-opacity",
          "duration-500"
        );
      }
    }, 3000);
  };

  return (
    <>
      <main className="max-w-4xl m-auto mt-25 ">
        <div
          id="messages"
          className="text-white fixed w-50 m-auto top-20 left-0 right-0"
        ></div>
        <motion.div
          // initial={{ opacity: 0 }} // Initially hidden
          // whileInView={{ opacity: 1 }} // Animate when in view
          // transition={{ duration: 1, delay: 0.2 }} // Smooth transition
          // viewport={{ once: true }} // Repeats every time it enters view
          className="grid lg:grid-cols-2 sm:grid-cols-1 mt-30 mb-40 gap-10"
        >
          <div className="m-auto">
            <motion.p
              initial={{ opacity: 0, x: 10 }} // Initially hidden
              animate={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: 0.4 }} // Smooth transition
              className=" font-extrabold text-7xl text-white"
            >
              HI<span className="text-blue-600">!</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 10 }} // Initially hidden
              animate={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: 1}} // Smooth transition
              className=" font-extrabold text-5xl text-white"
            >
              I'M Rainer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} // Initially hidden
              animate={{ opacity: 1 }} // Animate when in view
              transition={{ duration: 0.5, delay: 2 }} // Smooth transition
              className=" font-extrabold text-5xl text-white"
            >
              WEB <span className="text-blue-600">DEVELOPER</span>
            </motion.p>
          </div>
          <div className="">
            <img
              src="profile12.jpg"
              alt=""
              className="rounded-2xl m-auto w-80"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // Initially hidden
          whileInView={{ opacity: 1 }} // Animate when in view
          transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition
          className="ml-7 text-left text-white text-5xl font-bold mt-70 mb-30 overflow-hidden"
        >
          ABOUT <span className="text-blue-600 outline-0">ME</span>
        </motion.div>
        <div className="gap-7 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 10 }} // Initially hidden
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition
            className="ml-7 border-l-3 border-blue-700 h-40  "
          >
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">SUMMARY</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              I aim to secure a position in the IT or management sectors, which
              will allow me to utilize my education and skills to contribute to
              the company's operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }} // Initially hidden
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
            className="ml-7 border-l-3 border-blue-700 h-40 "
          >
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">EDUCATION</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              <span className="font-bold">
                Eastwoods Professional College of Science and Technology
                <br></br>
              </span>
              Bachelor of Science in Information Technology <br />
              2020-2024
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }} // Initially hidden
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: 0.3 }} // Smooth transition
            className="ml-7 border-l-3 border-blue-700 h-40"
          >
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">EXPERIENCE</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              <span className="font-bold">
                Centro Medico De Santisimo Rosario
              </span>
              <br />
              Technical Support - Intern <br />
              March 2024 - June 2024
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }} // Initially hidden
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: 0.4 }} // Smooth transition
            className="ml-7 border-l-3 border-blue-700 h-40"
          >
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">TECH STACK</p>
            </div>
            <p className="px-7 mt-2 text-white font-light flex flex-wrap gap-2">
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                HTML
              </span>
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                CSS
              </span>
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                JAVASCRIPT
              </span>
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                BOOTSTRAP
              </span>
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                TAILWIND CSS
              </span>
              <span className="border-2  text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                REACT JS
              </span>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "40px" }} // Initially hidden
          whileInView={{ opacity: 1, y: "0px" }} // Animate when in view
          transition={{ duration: 0.5, delay: 0.4 }} // Smooth transitio
          className="m-auto text-center text-white text-6xl font-bold mt-50 mb-30"
        >
          WHAT I <span className="text-blue-600 outline-0">DO</span>
        </motion.div>
        <motion.div>
          <div className="text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-9 ">
            <motion.div
              initial={{ opacity: 0, y: "10px" }} // Initially hidden
              whileInView={{ opacity: 1, y: "0px" }} // Animate when in view
              transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition
              viewport={{ once: false, amount: 0.5 }} // Repeats every time it enters view
              className=" items-center gap-3 p-6 m-auto shadow-md shadow-blue-600 rounded-lg h-full w-70"
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
              initial={{ opacity: 0, y: "20px" }} // Initially hidden
              whileInView={{ opacity: 1, y: "0px" }} // Animate when in view
              transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
              viewport={{ once: false, amount: 0.5 }} // Repeats every time it enters view
              className=" items-center gap-3 p-6 m-auto shadow-md shadow-blue-600 rounded-lg h-full w-70"
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
              initial={{ opacity: 0, y: "20px" }} // Initially hidden
              whileInView={{ opacity: 1, y: "0px" }} // Animate when in view
              transition={{ duration: 0.5, delay: 0.3 }} // Smooth transition
              viewport={{ once: false, amount: 0.5 }} // Repeats every time it enters view
              className=" items-center gap-3 p-6 m-auto shadow-md shadow-blue-600 rounded-lg h-full w-70"
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
          <motion.button
            initial={{ opacity: 0 }} // Initially hidden (opacity 0)
            animate={{ opacity: 1 }} // Final state (opacity 1)
            transition={{ delay: 2, duration: 0.5 }} // Duration of 1 second
            onClick={message}
            type="button"
            className="flex m-auto items-center text-black  bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-bold rounded-4xl text-sm px-7 py-2.5 whitespace-normal "
          >
            <span>
              <img src="text.gif" alt="" width={30} />
            </span>
            Message me!
          </motion.button>
        </div>
      </main>
    </>
  );
}

export default Content;
