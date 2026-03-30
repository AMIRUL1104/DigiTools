import Navbar from "./components/NavBar/navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Success from "./components/Success/Success";
import Products from "./components/Products/Products";

// hooks
import { use } from "react";
import GetStart from "./components/GetStart/GetStart";

let dataPromise = fetch("/Products.json").then((res) => res.json());

function App() {
  const productsData = use(dataPromise);
  // console.log(productsData);

  return (
    <div className="max-w-400 mx-auto">
      <Navbar />
      <Banner />
      <Success />
      <Products productsData={productsData} />
      <GetStart />
    </div>
  );
}

export default App;
