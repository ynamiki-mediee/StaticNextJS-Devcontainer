import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-footer text-black bg-primary text-white drop-shadow-md">
      <p>© {year} xxxx, Inc.</p>
    </footer>
  );
};

export default Footer;
