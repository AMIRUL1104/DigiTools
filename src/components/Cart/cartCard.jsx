function cartCard({ data, handleDeleteItem }) {
  return (
    <div className=" flex items-center justify-between bg-[#f9fafc]  rounded-sm">
      {/* left side */}
      <div className=" flex items-center justify-center">
        <div className=" w-16 p-4">
          <img src={data.icon} alt="image" />
        </div>

        <div>
          <h3>{data.name}</h3>
          <p>${data.price}</p>
        </div>
      </div>

      {/* right side  */}

      <button id={data.id} onClick={handleDeleteItem} className=" text-red-500">
        Remove
      </button>
    </div>
  );
}

export default cartCard;
