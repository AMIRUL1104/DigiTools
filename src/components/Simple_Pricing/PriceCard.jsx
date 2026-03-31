import check from "../../../public/assets/check.png";
function PriceCard({ data }) {
  return (
    <div
      className={`sm:min-w-96 max-w-2xs rounded-2xl shadow-sm hover:shadow-2xl transition duration-100 px-8 relative border border-[#ddd] py-5 flex flex-col ${
        data.tag
          ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
          : "bg-transparent"
      }`}
    >
      {data.tag && (
        <p className="absolute inline-flex -top-2 left-[35%] capitalize bg-yellow-400 text-yellow-700 font-semibold py-0.5 px-2 rounded-full">
          {data.tag}
        </p>
      )}

      <div className="space-y-4 grow mb-6">
        {" "}
        {/* Content area that grows */}
        <h2
          className={`text-2xl font-bold capitalize ${data.tag ? "text-white" : "text-[#101727FF]"}`}
        >
          {data.name}
        </h2>
        <p
          className={`${data.tag ? "text-white" : "text-[#627382]"} font-normal leading-[1.112px]`}
        >
          {data.desc}
        </p>
        <h2 className=" my-6">
          <span className="text-2xl font-extrabold">{data.price}</span>
          <span
            className={`${data.tag ? "text-white" : "text-[#627382]"} font-normal leading-[1.112px]`}
          >
            /{data.period}
          </span>
        </h2>
        <ul className="flex items-start justify-evenly flex-col gap-1.5">
          {data.features.map((feature, i) => (
            <li
              className={`${data.tag ? "text-white" : "text-[#627382]"} font-normal leading-[1.112px] flex items-center gap-2`}
              key={i}
            >
              <img src={check} alt="check marks" /> <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed at the bottom */}
      <div className="bg-white rounded-full">
        <button
          className={`capitalize rounded-3xl btn w-full font-bold hover:scale-95 transition duration-100 border-none 
        ${
          data.tag
            ? " bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text  text-transparent"
            : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
        }
      `}
        >
          buy now
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
