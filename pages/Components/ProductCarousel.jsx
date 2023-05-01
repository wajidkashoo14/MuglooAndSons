import Image from 'next/image'
import React from 'react'
import products from './Products'
import Link from 'next/link';

function ProductCarousel() {
  return (
    <>
    <h1 className='text-center mt-28 text-5xl'>Poduct Category</h1>
    <div className='w-full flex gap-8 justify-center min-h-[70vh] mt-28'>
       {products.map((product => {
        const {id, title, detail, image} = product;
        return (
            <article key={id} className='w-1/5 h-36 shadow-lg shadow-indigo-500/50 '>   
            <Image src={image} alt='carpet' width={500} height={200} />
            <h2 className='mt-6 text-xl'>{title}</h2>
            <p className='text-md mt-4'>{detail.slice(0,130)}<button className='ml-2 text-[#3366CC] hover:underline'><Link href='/'>Read more...</Link></button> </p>
            </article>
        )
       }))}
    </div>
    </>
  )
}

export default ProductCarousel