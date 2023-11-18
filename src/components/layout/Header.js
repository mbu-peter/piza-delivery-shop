import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        PizaEats
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contacts</Link>
        <Link href={""} className="text-white bg-primary rounded-full px-8">
          Login
        </Link>
      </nav>
    </header>
  );
}
