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
      <main className="pt-25">
        <div
          id="messages"
          className="text-white fixed w-50 m-auto top-20 left-0 right-0"
        ></div>
        <motion.div
          initial={{ opacity: 0 }} // Initially hidden
          whileInView={{ opacity: 1 }} // Animate when in view
          transition={{ duration: 1, delay: 0.2 }} // Smooth transition
          viewport={{ once: true }} // Repeats every time it enters view
          className="max-w-4xl m-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-40 gap-10"
        >
          <div className="m-auto flex flex-col">
            <p
              initial={{ opacity: 0, x: 10 }} // Initially hidden
              animate={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: 0.4 }} // Smooth transition
              className=" font-extrabold text-7xl text-white"
            >
              Hi<span className="">!</span>
            </p>
            <p
              initial={{ opacity: 0, x: 10 }} // Initially hidden
              animate={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: 1 }} // Smooth transition
              className=" font-extrabold text-5xl text-white"
            >
              I'M Rainer
            </p>
            <p
              initial={{ opacity: 0 }} // Initially hidden
              animate={{ opacity: 1 }} // Animate when in view
              transition={{ duration: 0.5, delay: 2 }} // Smooth transition
              className=" font-extrabold text-5xl text-white"
            >
              Web<span className="text-blue-600">Developer</span> <br />
            </p>
            <div className="font-extralight text-lg text-white opacity-80">
              Philippines
            </div>
            <div className="flex mt-6 m-auto gap-6 w-32">
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
          <div className="">
            <img
              src="profile12.jpg"
              alt=""
              className="rounded-2xl m-auto w-80"
            />
          </div>
        </motion.div>
        <div className="max-w-6xl m-auto p-4 text-white">
          <div className="p-8 font-bold text-white text-3xl">
            <span className="text-blue-600">About</span> Me
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-2">
            <div className="col-span-1  order-1 md:order-1  border-2 border-gray-800 rounded-lg p-10">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-4" src="./info.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Summary</div>
              </div>
              <div className="font-light p-2">
                I aim to secure a position in the IT or management sectors,
                which will allow me to utilize my education and skills to
                contribute to the company's operations.
              </div>
            </div>
            <div className="col-span-1 row-span-2 order-3 md:order-2  border-2 border-gray-800 rounded-lg p-10">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-5" src="./code.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Tech Stack</div>
              </div>
              <div className="">
                <div className=" opacity-60 mt-4">Front-End</div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div class="badge badge-ghost">HTML</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">CSS</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">Javascript</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">Tailwind CSS</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">Bootsrap</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">React JS</div>
                  </li>
                </ul>
                <div className="p-2 opacity-60 mt-4">Developer Tools</div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div class="badge badge-ghost">Git</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">Github</div>
                  </li>
                  <li>
                    <div class="badge badge-ghost">VS Code</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  order-2 md:order-3  border-2 border-gray-800 rounded-lg p-10">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-5" src="./education.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Education</div>
              </div>
              <div className="font-light p-2">
                <div className="font-medium">
                  Eastwoods Proffesional College of Science and Technology
                </div>
                <div className="pt-2">
                  BS in Information Technology{" "}
                  <div class="badge badge-ghost">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;
