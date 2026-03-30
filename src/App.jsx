import Navbar from "./components/NavBar/navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Success from "./components/Success/Success";

// hooks
// import { use } from "react";

// let dataPromise = fetch("/Products.json").then((res) => res.json());

function App() {
  // const productsData = use(dataPromise);
  // console.log(productsData);

  return (
    <div className="max-w-400 mx-auto">
      <Navbar />
      <Banner />
      <Success />
    </div>
  );
}

export default App;
