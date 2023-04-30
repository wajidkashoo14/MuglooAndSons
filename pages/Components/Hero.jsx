/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from '../../styles/hero.module.css';

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/temp1.jpg",
    "/temp2.jpg",
    "/temp3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <article className="w-screen -pt-24 z-0 h-3/4 relative">
      {images.map((url, index) => (
        <Image
        width={1400}
        height={600}
          key={url}
          src={url}
          alt="Hero Banner"
          className={styles.heroBannerImage}
          style={{ opacity: index === imageIndex ? 1 : 0 }}
        />
      ))}
      {/* <div className="w-6/12">
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
      </div> */}
    </article>
  );
}

export default Hero;
