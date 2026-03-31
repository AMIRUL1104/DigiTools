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
}) {
  let container;
  if (dataType === "cartData") {
    container = (
      <Cart cartData={cartData} handleDeleteItem={handleDeleteItem} />
    );
  } else {
    container = (
      <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {productsData.map((data) => (
          <ProductCard
            key={data.id}
            data={data}
            handleProduct={handleProduct}
          />
        ))}
      </section>
    );
  }

  return (
    <section className="max-w-360 my-28 flex flex-col items-center ">
      <ProductIntro setDataType={setDataType} cartTotal={cartData.length} />
      {container}
    </section>
  );
}

export default Products;
