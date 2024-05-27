import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 text-sm">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Marcos Barrozo. Please send comments or questions to mbarrozofilho@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;