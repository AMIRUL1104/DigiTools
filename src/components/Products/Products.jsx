import ProductIntro from "./ProductIntro";
import ProductCard from "./ProductCard";
import Cart from "../Cart/Cart";

function Products({
  productsData,
  dataType,
  setDataType,
  handleProduct,
  cartData,
  handleDeleteItem,
  handleProceed,
}) {
  let container;
  if (dataType === "cartData") {
    container = (
      <Cart
        cartData={cartData}
        handleDeleteItem={handleDeleteItem}
        handleProceed={handleProceed}
      />
    );
  } else {
    container = (
      <section className="  flex flex-col items-center justify-center md:grid  md:grid-cols-2 lg:grid-cols-3 gap-10  ">
        {productsData.map((data) => (
          <ProductCard
            key={data.id}
            data={data}
            handleProduct={handleProduct}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </section>
    );
  }

  return (
    <section className="max-w-360 my-28 mx-auto space-y-5 ">
      <ProductIntro
        dataType={dataType}
        setDataType={setDataType}
        cartTotal={cartData.length}
      />
      {container}
    </section>
  );
}

export default Products;
