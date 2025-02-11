import { motion } from "motion/react";

function Content() {
  const message = () => {
    alert("under development ^_^");
  };
  return (
    <>
      <motion.main
        initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
        animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
        transition={{ delay: 0.2, duration: 0.5 }} // Duration of 1 second
        className="max-w-4xl m-auto mt-25"
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <img src="profilee.jpg" alt="" className="rounded-lg m-auto w-46" />
          </div>
          <div className="flex flex-col items-center justify-center mt-9">
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
        <div className="gap-7 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mt-12">
          <div className="ml-3 border-l-3 border-blue-700 h-40 ">
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">About</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              I aim to secure a position in the IT or management sectors, which
              will allow me to utilize my education and skills to contribute to
              the company's operations.
            </p>
          </div>
          <div className="ml-3 border-l-3 border-blue-700 h-40 ">
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">Education</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              <span className="font-bold">
                Eastwoods Professional College of Science and Technology
                <br></br>
              </span>
              Bachelor of Science in Information Technology - 2020-2024
            </p>
          </div>
          <div className="ml-3 border-l-3 border-blue-700 h-40">
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">Experience</p>
            </div>
            <p className="px-7 mt-2 text-white font-light">
              <span className="font-bold">
                Centro Medico De Santisimo Rosario
              </span>
              <br />
              Technical Support - Intern <br />
              March 2024 - June 2024
            </p>
          </div>
          <div className="ml-3 border-l-3 border-blue-700 h-40">
            <div className="flex items-center gap-2 px-7 mt-2">
              <p className="text-white font-extrabold text-lg">Tech Stack</p>
            </div>
            <p className="px-7 mt-2 text-white font-light flex flex-wrap gap-2">
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                HTML
              </span>
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                CSS
              </span>
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                JAVASCRIPT
              </span>
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                BOOTSTRAP
              </span>
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                TAILWIND CSS
              </span>
              <span class="border-1 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                REACT JS
              </span>
            </p>
          </div>
        </div>

        <motion.div
          initial={{ y: "-30px", opacity: 0 }} // Initially hidden (opacity 0)
          animate={{ y: "0px", opacity: 1 }} // Final state (opacity 1)
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-30"
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
              className="border-b-4 border-blue-600 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
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
              className="border-b-4 border-blue-600 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
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
              className="border-b-4 border-blue-600 items-center gap-3 p-6 m-auto shadow-lg rounded-lg h-full"
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
            class="flex m-auto items-center text-black  bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-bold rounded-4xl text-sm px-7 py-2.5 whitespace-normal "
          >
            <span>
              <img src="text.gif" alt="" width={30} />
            </span>
            Message me!
          </motion.button>
        </div>
      </motion.main>
    </>
  );
}

export default Content;