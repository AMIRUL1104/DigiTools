function FreeTrail() {
  return (
    <section className="mx-auto my-16 py-16  flex max-sm:flex-1 items-center justify-evenly    bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
      <div className="flex items-center justify-center flex-col max-w-4xl">
        <h1 className=" text-white text-center md:text-5xl  sm:text-4xl text-3xl loading-[1.16662px] font-extrabold  capitalize ">
          Ready to Transform Your Workflow?
        </h1>
        <p className=" px-28 mt-2.5  text-white  max-sm:px-2.5 text-center text-base font-normal loading-[1.112px] ">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* action buttons */}
        <div className=" flex items-center flex-row-reverse gap-4 py-2 mt-5 mb-1">
          <button className="btn rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 ">
            View Pricing
          </button>
          <button className="  border-[1.5px] border-transparent rounded-3xl inline-block p-[1.5px]  bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 ">
            <span className=" flex gap-1.5  px-4 py-1 rounded-full bg-white">
              <span className="   capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
                Explore Products
              </span>
            </span>
          </button>
        </div>
        <p className=" px-28 mt-2.5  text-white  max-sm:px-2.5 text-center text-base font-normal loading-[1.112px] ">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default FreeTrail;
