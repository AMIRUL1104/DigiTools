import check from "/assets/check.png";
import { useEffect, useState } from "react";
function ProductCard({ data, handleProduct, handleDeleteItem }) {
  const [isAdded, setIsAdded] = useState(() => {
    let saved = localStorage.getItem(data.id);
    return saved ? JSON.parse(saved) : false;
  });

  const togglecart = (e) => {
    if (isAdded) {
      handleDeleteItem(e);
    } else {
      handleProduct(e);
    }

    setIsAdded((pre) => !pre);
  };

  useEffect(() => {
    localStorage.setItem(data.id, JSON.stringify(isAdded));
  }, [isAdded, data.id]);

  let tagClass;
  if (data.tagType === "new") {
    tagClass = "text-green-500 bg-[#dbfce7FF]";
  } else if (data.tagType === "best-seller") {
    tagClass = "text-yellow-500 bg-[#fcf9db]";
  } else {
    tagClass = "text-indigo-500 bg-[#e9dbfc]";
  }
  return (
    <div
      key={data.id}
      className=" sm:min-w-96 max-w-2xs  rounded-2xl shadow-sm hover:shadow-2xl transition duration-100 px-8 py-1.5 relative space-y-4"
    >
      <p
        className={`${tagClass} rounded-2xl py-0.5 px-2 text-[14px] font-medium inline-block absolute right-2.5 top-2.5  `}
      >
        {data.tag}
      </p>
      <div className=" w-10 h-10">
        <img className=" mt-8" src={data.icon} />
      </div>
      <h2 className=" text-2xl font-bold capitalize text-[#101727FF] ">
        {data.name}{" "}
      </h2>
      <p className=" text-[#627382]  font-normal loading-[1.112px] ">
        {data.description}
      </p>
      <h2>
        <span className=" text-2xl font-extrabold">${data.price}</span>
        <span className=" text-[#627382]  font-normal loading-[1.112px] ">
          /{data.period}
        </span>{" "}
      </h2>
      <ul className=" flex  items-start justify-evenly flex-col gap-1.5 ">
        {data.features.map((feature, i) => (
          <li
            className=" text-[#627382] flex items-center justify-center"
            key={i}
          >
            <img src={check} alt="chech marks" /> <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        id={data.id}
        name={data.name}
        onClick={togglecart}
        className={`capitalize rounded-3xl btn w-full text-white font-bold hover:scale-95 transition duration-100 ${
          isAdded ? "bg-red-500" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
        }`}
      >
        {isAdded ? "added to cart" : "buy now"}
      </button>
    </div>
  );
}

export default ProductCard;
