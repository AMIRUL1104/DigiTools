import Navbar from "./components/NavBar/navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Success from "./components/Success/Success";
import Products from "./components/Products/Products";

// hooks
import { use, useState, useEffect } from "react";
import GetStart from "./components/GetStart/GetStart";
import Pricing from "./components/Simple_Pricing/Pricing";
import FreeTrail from "./components/StartFree/FreeTrail";
import Footer from "./components/Footer/Footer";

let dataPromise = fetch("/Products.json").then((res) => res.json());

function App() {
  const productsData = use(dataPromise);

  // hooks
  const [dataType, setDataType] = useState("productData");
  const [cartData, setcartData] = useState(() => {
    let saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  //=========== functions =============
  const handleProduct = (e) => {
    const id = e.target.id;
    let isTrue = cartData.find((item) => parseInt(item.id) === parseInt(id));

    if (isTrue) return;
    let product = productsData.find((data) => data.id == id);

    setcartData([...cartData, product]);
  };

  const handleDeleteItem = (e) => {
    const id = e.target.id;

    const updatedCart = cartData.filter((item) => item.id != id);
    setcartData(updatedCart);

    localStorage.setItem(id, JSON.stringify(false));
  };

  const handleProceed = () => {
    // remove save cart data  element styling first
    let saveDatasId = cartData.map((item) => item.id);
    saveDatasId.forEach((element) => {
      localStorage.setItem(element, JSON.stringify(false));
    });

    // delete all cart productss
    setcartData([]);
  };

  return (
    <div className="max-w-400 mx-auto">
      <Navbar />
      <Banner />
      <Success />
      <Products
        productsData={productsData}
        dataType={dataType}
        setDataType={setDataType}
        handleProduct={handleProduct}
        cartData={cartData}
        handleDeleteItem={handleDeleteItem}
        handleProceed={handleProceed}
      />
      <GetStart />
      <Pricing />
      <FreeTrail />
      <Footer />
    </div>
  );
}

export default App;
