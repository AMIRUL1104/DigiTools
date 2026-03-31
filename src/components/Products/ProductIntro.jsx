function ProductIntro({ setDataType, cartTotal }) {
  return (
    <div className=" mx-auto flex items-center gap-4 justify-center flex-col ">
      <h1 className="text-[#101727] text-center md:text-5xl  text-4xl loading-[1.16662px] font-extrabold  capitalize ">
        Premium Digital Tools
      </h1>
      <p className=" mx-auto max-w-140 text-center">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.{" "}
      </p>

      {/* tabs buttons */}
      <div className=" flex items-start gap-4 py-0.5 border border-[#ddd] rounded-full px-1 ">
        <button
          onClick={() => setDataType("productData")}
          className="btn rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 "
        >
          Products
        </button>
        <button
          onClick={() => setDataType("cartData")}
          className="  rounded-3xl inline-block p-[1.5px]  bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:scale-95 transition duration-100 "
        >
          <span className=" flex gap-1.5  px-4 py-1 rounded-full bg-white">
            <span className="  bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
              Cart ({cartTotal})
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductIntro;
