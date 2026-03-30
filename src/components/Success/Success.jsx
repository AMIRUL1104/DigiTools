function Success() {
  const successData = [
    { number: "50K", label: "active user" },
    { number: "200+", label: "premium tools" },
    { number: "4.9", label: "rating" },
  ];
  return (
    <section className=" mx-auto my-16 py-16  flex max-sm:flex-1 items-center justify-evenly bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">
      {successData.map((data) => (
        <div className="flex flex-col items-center gap-1.5">
          <h1 className=" text-4xl sm:text-5xl text-white font-extrabold">
            {data.number}
          </h1>
          <p className=" text-base sm:text-[20px] text-[#e3e6e9] font-medium capitalize ">
            {data.label}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Success;
