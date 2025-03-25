import { motion } from "motion/react";
import RotatingText from "../TextAnimations/RotatingText/RotatingText.jsx";

function Content() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }} // Initially hidden
        whileInView={{ opacity: 1 }} // Animate when in view
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        className="pt-25 max-w-4xl m-auto "
      >
        <div
          id="messages"
          className="text-white fixed w-50 m-auto top-20 left-0 right-0"
        ></div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-40 gap-10">
          <div className="m-auto flex flex-col w-50">
            <div className=" font-extrabold text-7xl text-white">Hi!</div>
            <div className="flex items-center ">
              <div className=" font-extrabold text-5xl text-white">I'M</div>
              <div className="">
                <RotatingText
                  texts={["Rainer", "22"]}
                  mainClassName="px-2 sm:px-2 md:px-3 font-extrabold text-blue-600 text-5xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            <div className="text-md text-white opacity-80">
              Front-End Developer
            </div>
            <div className="font-extralight text-md text-white opacity-80">
              Philippines
            </div>
          </div>
          <div className="">
            <img
              src="Profile123.jpg"
              alt=""
              className="rounded-2xl m-auto w-80"
            />
          </div>
        </div>
        <div className="p-6 m-2 text-white">
          <div className="flex justify-center gap-2 text-3xl font-bold">
            About<span className="text-info">Me</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2 mt-10 mb-16">
            <div className="col-span-1 border border-zinc-800 bg-zinc-950  rounded-xl    order-1 md:order-1   p-6">
              <div className="flex items-center gap-2 ">
                <div>
                  <img className="w-4" src="./info.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Summary</div>
              </div>
              <div className="font-light p-2 opacity-80">
                I aim to secure a position in the IT or management sectors,
                which will allow me to utilize my education and skills to
                contribute to the company's operations.
              </div>
            </div>
            <div className="col-span-1 border border-zinc-800 bg-zinc-950 rounded-xl   row-span-2 order-3 md:order-2   p-6">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-5" src="./code.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Tech Stack</div>
              </div>
              <div className="p-4 space-y-2">
                <div className=" opacity-80">Front-End</div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div className="badge rounded-full">HTML</div>
                  </li>
                  <li>
                    <div className="badge rounded-full">CSS</div>
                  </li>
                  <li>
                    <div className="badge rounded-full">
                      Javascript
                    </div>
                  </li>
                  <li>
                    <div className="badge rounded-full">
                      Tailwind CSS
                    </div>
                  </li>
                  <li>
                    <div className="badge rounded-full">
                      Bootstrap
                    </div>
                  </li>
                  <li>
                    <div className="badge rounded-full">
                      React JS
                    </div>
                  </li>
                  <li>
                    <div className="badge rounded-full">Vite</div>
                  </li>
                  <li>
                    <div className="badge rounded-full">
                      Node js
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-4 space-y-2">
                <div className="opacity-80 text-sm font-semibold text-white">
                  Developer Tools
                </div>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "NPM",
                    "Vercel",
                    "Daisy UI",
                    "Framer Motion",
                    "React Bits",
                  ].map((tool) => (
                    <li key={tool}>
                      <div className="badge rounded-full">
                        {tool}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 border border-zinc-800 bg-zinc-950 rounded-xl    order-2 md:order-3   p-6">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-5" src="./education.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl ">Education</div>
              </div>
              <div className="font-light p-2  ">
                <div className="font-medium opacity-80 ">
                  Eastwoods Proffesional College of Science and Technology
                </div>
                <div className="pt-2  flex items-center justify-between">
                  <div className="opacity-80">BS in Information Technology</div>
                  <div className="badge badge-sm rounded-full badge-neutral">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 text-3xl font-bold">
            Recent<span className="text-info">Projects</span>
          </div>
          <div className="grid grid-rows-2 mt-10 mb-16  max-w-md m-auto ">
            <div className="card border border-zinc-800 bg-zinc-950 w-full shadow-sm rounded-xl">
              <figure>
                <img className="w-100" src="fika.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Fika</h2>
                <p className="opacity-80">
                  Fika is a concept, a state of mind. Slowing down, getting in
                  touch with yourself, and connecting with the people around
                  you. Sip coffee. Chat with loved ones. Repeat again tomorrow.
                </p>
                <div className="card-actions flex justify-between items-center ">
                  <div>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {["HTML", "Tailwind", "React"].map((tool) => (
                        <li key={tool}>
                          <div className="badge badge-sm rounded-full">
                            {tool}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a href="https://fika-sand.vercel.app/">
                      <button className="btn btn-md btn-info rounded-lg">
                        Visit
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
}

export default Content;
