import PriceCard from "./PriceCard";

function Pricing() {
  const pricing = [
    {
      id: 1,
      name: "starter",
      desc: "Perfect for getting started",
      price: "$0",
      period: "month",
      tag: "",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
    },
    {
      id: 2,
      name: "pro",
      desc: "Best for professionals and freelancers",
      price: "$29",
      period: "month",
      tag: "most popular",
      features: [
        "Everything in Starter",
        "Unlimited projects",
        "Premium templates",
        "Priority email support",
        "Advanced analytics",
      ],
    },
    {
      id: 3,
      name: "enterprise",
      desc: "For large scale organizations",
      price: "$99",
      period: "month",
      tag: "",
      features: [
        "Everything in Pro",
        "Custom branding",
        "Dedicated account manager",
        "24/7 Phone support",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section className=" flex flex-col items-center gap-10 my-28">
      <div>
        <h1 className=" text-[#101727FF] text-3xl sm:text-5xl font-extrabold capitalize text-center">
          simple , transparent pricing
        </h1>
        <p className=" text-[#627382]  font-normal loading-[1.112px] text-center mt-4 ">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-4  ">
        {pricing.map((item, i) => (
          <PriceCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
