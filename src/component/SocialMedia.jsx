import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
function SocialMedia() {
  return (

    <>
      <section className="border border-zinc-800 bg-zinc-950 rounded-xl justify-center flex gap-8 items-center   fixed w-70 h-13 bottom-10 left-1/2 -translate-x-1/2">
        <div>
          <FaFacebookSquare size={25} />
        </div>
        <div>
          <AiFillInstagram size={25} />
        </div>
        <div>
          <FaGithub size={25} />
        </div>
      </section>
    </>
  );
}
export default SocialMedia;
