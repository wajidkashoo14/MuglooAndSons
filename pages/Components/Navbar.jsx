import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="h-24 px-20 flex bg-[#A1CABF] justify-between items-center text-[#17256E] overflow-x-hidden">
      <div className="text-3xl">
        <Link href="/">Mugloo</Link>
      </div>
      <div>
        <ul className="flex gap-10 text-xl cursor-pointer">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
