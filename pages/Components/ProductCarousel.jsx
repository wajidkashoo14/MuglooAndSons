import Image from 'next/image'
import React from 'react'

function ProductCarousel() {
  return (
    <div>
        <Image src='./temp1' alt='ball picture' width={400} height={300} />
        <h2>Kashmiri Hand Woven Carpets</h2>
        <p>we offer to the clients is artistically woven by creative and proficient artisans.</p>
    </div>
  )
}

export default ProductCarousel