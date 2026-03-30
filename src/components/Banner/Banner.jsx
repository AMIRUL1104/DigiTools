import play from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png";
import ball from "../../assets/group-5.png";

function Banner() {
  return (
    <section className="max-w-360 mx-auto  flex max-lg:flex-col items-center justify-between">
      {/* left side  */}
      <div className=" max-w-2xl flex flex-col gap-4 items-center lg:items-start ">
        <p
          className=" inline-flex items-center gap-1.5 font-medium  bg-[#e1e7ffFF] rounded-3xl px-3 py-1 
          "
        >
          {" "}
          <span>
            <img src={ball} alt="play image" />
          </span>{" "}
          <span className=" bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </span>
        </p>
        <h1 className=" text-[#101727] max-lg:text-center md:text-5xl xl:text-7xl text-4xl loading-[1.16662px] font-extrabold  capitalize ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className=" text-[#627382] max-xl:max-w-100  max-lg:text-center text-lg font-normal loading-[1.112px] ">
          Access premium AI tools, design assets, templates, and productivity{" "}
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        {/* action buttons */}
        <div className=" flex items-start gap-4 py-2">
          <button className="btn rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 ">
            Explore Products
          </button>
          <button className="  rounded-3xl inline-block p-[1.5px]  bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 ">
            <span className=" flex gap-1.5  px-4 py-1 rounded-full bg-white">
              <span>
                <img src={play} alt="play image" />
              </span>{" "}
              <span className="  bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
                Watch Demo
              </span>
            </span>
          </button>
        </div>
      </div>
      {/* right side  */}
      <div>
        <img src={bannerImg} alt="banner image " />
      </div>
    </section>
  );
}

export default Banner;
