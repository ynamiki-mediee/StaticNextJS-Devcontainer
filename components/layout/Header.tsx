import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="h-header w-full drop-shadow-md top-0 bg-primary text-white">
    <nav>
      <Link href="/">
        Home
      </Link>
      {/* 他のナビゲーションリンクを追加 */}
    </nav>
  </header>
);

export default Header;
