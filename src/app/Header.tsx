import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <Link
        href="/"
        className="px-2 bg-white text-blue-500 rounded-lg font-bold"
      >
        Home
      </Link>
    </header>
  );
}

export default Header;
