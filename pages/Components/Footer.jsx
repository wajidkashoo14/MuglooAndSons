import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="w-full flex justify-between min-h-[50vh] items-center bg-[#eee] px-48">
      <div className="w-72">
        <h2 className="mb-4 text-lg">Who we are</h2>
        <p className="text-[.8rem]">
          For more than 3 decades, Mugloo & Sons has been manufacturing,
          exporting and supplying an assortment of Kashmiri handicrafts, which
          include Papier Mache, Kashmiri Carpets and Kashmiri Shawls. Papier
          Mache items include Christmas Tree Hangings, Animal Print Gift Boxes,
          Wall Hanging Christmas Tree and Handcrafted Papier Mache.
        </p>
      </div>
      <div>
        <h2 className="mb-4">Quick Links</h2>
        <ul className="flex flex-col gap-2">
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
      <h2 className="mb-4">Know More</h2>
      <ul className="flex flex-col gap-2">
          <li>Product Categories</li>
          <li>Featured Products</li>
          <li>Kashmiri Carperts</li>
          <li>Kashmiri Shawls</li>
        </ul>
        </div>
      <div>
        <h1>Mugloo and Sons</h1>
      </div>
    </section>
  );
}

export default Footer;