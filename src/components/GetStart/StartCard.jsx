function StartCard({ step }) {
  return (
    <div className="  sm:min-w-96 max-w-2xs py-20 rounded-2xl shadow-lg hover:shadow-2xl px-8  relative flex items-center justify-center gap-4 flex-col text-center ">
      <p className=" absolute right-2.5 top-5 w-10 h-10 flex items-center justify-center text-white text-[14px] font-bold rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]  ">
        {step.id}
      </p>
      <div className="  bg-[#e1e7ffFF] p-5 rounded-full">
        <img src={step.img} alt="user " />
      </div>

      <h3 className="text-2xl font-bold text-[#101727] capitalize">
        {step.name}
      </h3>
      <p className=" text-[#627382]  font-normal loading-[1.112px]   ">
        {step.description}
      </p>
    </div>
  );
}

export default StartCard;
