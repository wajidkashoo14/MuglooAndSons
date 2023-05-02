import React from "react";
import products from "../../Data/Products";
import Image from "next/image";
import StarRating from "./StarRating";
// import { AiOutlineStar } from 'react-icons/ai'
// import Link from "next/link";

function FeaturedProducts() {
  return (
    <>
      <h1 className="text-5xl text-center">Featured Products</h1>
    <div className="w-full flex gap-8 justify-center min-h-[70vh] mt-28">
        {products.map((product) => {
          const { id, title, image, detail } = product;
          return (
            <article key={id}className='w-1/5 h-36 text-center shadow-2xl'>
              <Image src={image} alt="carpet" width={800} height={200} />
              <h2 className="mt-12 text-[1.2rem]">{title}</h2>
              <button className="text-[.9rem] bg-[#5e6b2a] text-[#fff] px-4 py-1 rounded-full mt-4">Enquire</button>
              <span className="mt-6">{<StarRating />}</span>
              {/* <p className='text-md mt-4'>{`${detail.slice(0,130)}...`}<button className='ml-2 text-[#3366CC] hover:underline'><Link href='/'>Read more</Link></button> </p>
              <div className="flex justify-between mt-6">
                <button className="text-md border-[1px] border-[#5e6b2a] px-4 py-1 rounded-full">Know More</button>
                <button className="text-md bg-[#5e6b2a] text-[#fff] px-4 py-1 rounded-full">Enquire</button>
              </div> */}
            </article>
          );
        })}
      </div>
    </>
  );
}

export default FeaturedProducts;
