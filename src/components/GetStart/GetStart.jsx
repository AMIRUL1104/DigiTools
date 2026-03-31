import StartCard from "./StartCard";

function GetStart() {
  const steps = [
    {
      id: "01",
      img: "src/assets/user.png",
      name: "create account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      img: "src/assets/package.png",
      name: "chose account",
      description:
        "Browse our catalog and select the toolsthat fit your needs.",
    },
    {
      id: "03",
      img: "src/assets/rocket.png",
      name: "start creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section className=" flex flex-col items-center gap-10 my-28">
      <div>
        <h1 className=" text-[#101727FF] text-3xl sm:text-5xl font-extrabold capitalize text-center">
          Get Started in 3 Steps
        </h1>
        <p className=" text-[#627382]  font-normal loading-[1.112px] text-center mt-4 ">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-4 ">
        {steps.map((step) => (
          <StartCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}

export default GetStart;
