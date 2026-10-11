import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <footer className="mt-auto bg-gray-900 px-4 py-8 text-white">
<div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
<Link href="/" className="text-2xl font-bold">
Book<span className="bg-linear-to-r from-[#59C6D2] to-[#23BE0A] bg-clip-text text-transparent">Vibe</span>
</Link>

    <p className="text-center text-sm text-gray-400">
      Discover your next favorite book.
    </p>

    <p className="text-sm text-gray-400">
      © 2026 BookVibe. All rights reserved.
    </p>
  </div>
</footer>
    );
};

export default Footer;