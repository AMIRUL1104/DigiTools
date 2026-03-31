import CartCard from "./cartCard";
function Cart({ cartData, handleDeleteItem, handleProceed }) {
  const totalPrice = cartData.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  let totalProduct = cartData.length;

  return (
    <>
      {totalProduct === 0 ? (
        <section className="  mx-auto border border-[#ddd] py-10 px-2.5 sm:px-5 md:px-10 rounded-xl w-86 sm:w-100 md:w-150 lg:w-200 space-y-5">
          <h1 className="text-center font-semibold text-4xl bg-linear-to-r  from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            Your cart is empty !
          </h1>
        </section>
      ) : (
        <section className="  mx-auto border border-[#ddd] py-10 px-2.5 sm:px-5 md:px-10 rounded-xl w-86 sm:w-100 md:w-150 lg:w-200 space-y-5">
          <h3 className=" font-bold text-2xl ">Your Cart</h3>

          <div className="  mx-auto space-y-4 ">
            {cartData.map((data) => (
              <CartCard
                key={data.id}
                data={data}
                handleDeleteItem={handleDeleteItem}
                // handleProduct={data}
              />
            ))}
          </div>

          <div className=" flex items-center justify-between px-4">
            <p>Total</p>
            <h2 className=" font-bold text-xl">${Math.round(totalPrice)}</h2>
          </div>

          <button
            onClick={handleProceed}
            className=" capitalize rounded-3xl btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full text-white font-bold hover:scale-95 transition duration-100"
          >
            Proceed to Checkout
          </button>
        </section>
      )}
    </>
  );
}

export default Cart;
