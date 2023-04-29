import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <article className="flex justify-between h-screen bg-[#A1CABF] px-16 pt-44 overflow-x-hidden">
      <div className="w-6/12">
        <h1 className="text-7xl font-bold mb-6 text-[#17256E]">Mugloo and Sons</h1>
        <p className="text-lg font-normal text-[#17256E] w-9/12">
          For more than 3 decades, Mugloo & Sons has been manufacturing,
          exporting and supplying an assortment of Kashmiri handicrafts, which
          include Papier Mache, Kashmiri Carpets and Kashmiri Shawls. Papier
          Mache items include Christmas Tree Hangings, Animal Print Gift Boxes,
          Wall Hanging Christmas Tree and Handcrafted Papier Mache
        </p>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="Picture of handicrafted ball"
          width={600}
          height={600}
          className="hero-animation"
        />
      </div>
    </article>
  );
}

export default Hero;
