import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Ultimate Delicacy with PizaEats
        </h1>
        <p className="my-4 text-gray-500">
          Experience the joy of indulging in premium quality ingredients crafted
          into delectable dishes. Order now and treat yourself to a culinary
          journey that promises to elevate your dining experience!
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" uppercase flex gap-2 bg-primary text-white px-8 py-2 rounded-full items-center">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}
