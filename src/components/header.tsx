import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="w-full absolute z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto">
        <div>
          <Link className="pr-5 text-3xl" href="/">
            Who Rescued Who?
          </Link>
          <Link className="text-3xl" href="/favorites">
            Favorites
          </Link>
        </div>
        <div className="text-3xl">Dark Mode</div>
      </nav>
    </div>
  );
}
