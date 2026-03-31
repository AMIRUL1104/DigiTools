function ProductIntro({ dataType, setDataType, cartTotal }) {
  return (
    <div className="  flex items-center gap-4 justify-center flex-col ">
      <h1 className="text-[#101727] text-center md:text-5xl  text-4xl loading-[1.16662px] font-extrabold  capitalize ">
        Premium Digital Tools
      </h1>
      <p className=" mx-auto max-w-140 text-center">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.{" "}
      </p>

      {/* tabs buttons */}
      <div className=" flex items-start   border border-[#ddd] rounded-full ">
        <button
          onClick={() => setDataType("productData")}
          className={`${dataType === "productData" ? " rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa]  " : " bg-transparent border-0"} btn  hover:scale-95 transition duration-100`}
        >
          Products
        </button>
        <button
          onClick={() => setDataType("cartData")}
          className={`${dataType === "cartData" ? " rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa]  " : " bg-transparent border-0"} btn  hover:scale-95 transition duration-100`}
        >
          Cart ({cartTotal})
        </button>
      </div>
    </div>
  );
}

export default ProductIntro;
