import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Marcos Barrozo. Please send comments or questions to{' '}
        <a href="mailto:mbarrozofilho@gmail.com">mbarrozofilho@gmail.com</a>
      </p>
      <a className="back-to-top" href="#top">Back to top ↑</a>
    </footer>
  );
};

export default Footer;
