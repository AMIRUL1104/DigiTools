import ProductIntro from "./ProductIntro";
import ProductCard from "./ProductCard";

function Products({ productsData }) {
  console.log(productsData);

  return (
    <section className="max-w-360 my-28 flex flex-col items-center justify-center  ">
      <ProductIntro />
      <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {productsData.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </section>
    </section>
  );
}

export default Products;
