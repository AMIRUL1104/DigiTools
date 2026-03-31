import cart from "../../assets/products/shopping-cart.png";
function navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-360 mx-auto mb-16">
      {/* PART 1 */}
      <div className="navbar-start">
        <div className="dropdown bg-transparent border-none mr-1.5">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content gap-8 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className=" text-[#101727] text-base font-semibold capitalize ">
              Products
            </li>
            <li className=" text-[#101727] text-base font-semibold capitalize ">
              Features
            </li>
            <li className=" text-[#101727] text-base font-semibold capitalize ">
              Pricing
            </li>
            <li className=" text-[#101727] text-base font-semibold capitalize ">
              Testimonials
            </li>
            <li className=" text-[#101727] text-base font-semibold capitalize ">
              FAQ
            </li>
          </ul>
        </div>
        <a className="  text-xl font-black bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>

      {/* PART 2 */}
      <div className="navbar-center hidden lg:flex text-3xl">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li className=" text-[#101727] text-base font-semibold capitalize  ">
            Products
          </li>
          <li className=" text-[#101727] text-base font-semibold capitalize ">
            Features
          </li>
          <li className=" text-[#101727] text-base font-semibold capitalize ">
            Pricing
          </li>
          <li className=" text-[#101727] text-base font-semibold capitalize ">
            Testimonials
          </li>
          <li className=" text-[#101727] text-base font-semibold capitalize ">
            FAQ
          </li>
        </ul>
      </div>

      {/* PART 3 */}

      <div className="navbar-end gap-4 ">
        <button className="">
          <img src={cart} alt="cart image" />
        </button>
        <button className=" text-[#101727] text-base font-semibold capitalize ">
          Login
        </button>
        <button className="btn rounded-3xl bg-linear-to-r text-white from-[#4f39f6] to-[#9514fa] ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default navbar;
