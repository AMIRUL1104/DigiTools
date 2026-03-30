import Navbar from "./components/NavBar/navbar";
import Banner from "./components/Banner/Banner";
// import { use } from "react";
import "./App.css";
// let dataPromise = fetch("/Products.json").then((res) => res.json());

function App() {
  // const productsData = use(dataPromise);
  // console.log(productsData);

  return (
    <div className="max-w-400 mx-auto">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
