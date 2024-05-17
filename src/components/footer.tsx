import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container flex flex-wrap justify-between px-4 mx-auto">
        <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-bold">CUSTOMER SERVICE & FAQ</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Customer Service Overview</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Order Status</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Gift Card Balance</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Shipping</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Returns & Exchange</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Size Guide</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Store Finder</a></li>
          </ul>
        </div>
        <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-bold">MEMBERSHIP</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Register</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Swarovski Club</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Crystal Society (SCS)</a></li>
          </ul>
        </div>
        <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-bold">ABOUT US</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:underline">About Swarovski</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Sustainability</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Jobs & Career</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Alumni Community</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Corporate Gifts</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">For Professionals</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Sitemap</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Kristallwelten</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Swarovski Mobility</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Code of Conduct</a></li>
          </ul>
        </div>
        <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-bold">LEGAL</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Terms Of Use</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Cookie Consent</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Imprint</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">REACH information</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">Data Protection Consent Statement</a></li>
          </ul>
        </div>
      </div>
      <div className="container px-4 pt-4 mx-auto mt-4 text-center border-t border-gray-700">
        <p className="text-sm">&copy; 2024 Swarovski Japan. All rights reserved.</p>
        <p className="text-sm">SWAROVSKI and the SWAN logo are registered trademarks of Swarovski AG.</p>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-xl text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-xl text-white"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="text-xl text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-xl text-white"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-xl text-white"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="text-xl text-white"><i className="fab fa-xing"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;