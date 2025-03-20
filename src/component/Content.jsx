import { motion } from "motion/react";
import SplitText from "../TextAnimations/SplitText/SplitText.jsx";

function Content() {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen">
        <SplitText
          text="tae nayan nagawa ko rin HAHAHAHAHAAHAHAHAHAAHHAHAHA"
          className="text-2xl font-semibold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"

        />
      </div> */}
      <motion.main
        initial={{ opacity: 0 }} // Initially hidden
        whileInView={{ opacity: 1 }} // Animate when in view
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        className="pt-25"
      >
        <div
          id="messages"
          className="text-white fixed w-50 m-auto top-20 left-0 right-0"
        ></div>
        <div className="max-w-4xl m-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-40 gap-10">
          <div className="m-auto flex flex-col">
            <p className=" font-extrabold text-7xl text-white">Hi!</p>
            <p className=" font-extrabold text-5xl text-white">I'M Rainer</p>
            <p className=" font-bold text-2xl text-white">
              Front-End{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
                className="bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-500 bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
              <br />
            </p>
            <div className="font-extralight text-lg text-white opacity-80">
              Philippines
            </div>
            <div className="flex mt-10 m-auto gap-6 w-40">
              <a className="tooltip tooltip-info" data-tip="Github" href="">
                <img src="github.png" alt="" />
              </a>
              <a
                className="tooltip tooltip-info"
                data-tip="Facebook"
                href="https://www.facebook.com/ka.rainerr"
              >
                <img src="facebook.png" alt="" />
              </a>
              <a
                className="tooltip tooltip-info"
                data-tip="Instagram"
                href="https://www.instagram.com/ka.rainer"
              >
                <img src="instagram.png" alt="" />
              </a>
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
          <div className="flex gap-2 text-3xl font-bold">
            About<span className="text-info">Me</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2 mt-10 mb-16">
            <div className="col-span-1 border border-zinc-800 rounded-xl    order-1 md:order-1   p-6">
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-4" src="./info.png" alt="" />
                </div>
                <div className="font-bold text-white text-xl">Summary</div>
              </div>
              <div className="font-light p-2 opacity-80 ">
                I aim to secure a position in the IT or management sectors,
                which will allow me to utilize my education and skills to
                contribute to the company's operations.
              </div>
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-xl   row-span-2 order-3 md:order-2   p-6">
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
                    <div className="badge badge-ghost rounded-full">HTML</div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">CSS</div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">
                      Javascript
                    </div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">
                      Tailwind CSS
                    </div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">
                      Bootstrap
                    </div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">
                      React JS
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-4 space-y-2">
                <div className="opacity-80">Developer Tools</div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div className="badge badge-ghost rounded-full">Git</div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">Github</div>
                  </li>
                  <li>
                    <div className="badge badge-ghost rounded-full">
                      VS Code
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-xl    order-2 md:order-3   p-6">
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
                  <div className="badge badge-sm rounded-full badge-ghost">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 text-3xl font-bold">
            What I<span className="text-info">Do</span>
          </div>
          <div className="grid grid-rows-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </motion.main>
    </>
  );
}

export default Content;
