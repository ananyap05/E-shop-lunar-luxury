import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-teal-800 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-300">Subscribe</span> to get news, <br />
          events, and offers
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-end">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 mb-4 md:mb-0 py-2.5 rounded-lg px-2 focus:outline-none"
          />
          <button className="bg-teal-500 hover:bg-teal-600 duration-300 px-5 py-2.5 rounded-lg text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-center sm:text-left">
        <ul className="px-5 flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            className="invert"
          />
          <br />
          <p className="text-gray-400">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <AiFillFacebook size={25} className="cursor-pointer hover:text-teal-400" />
            <AiOutlineTwitter size={25} className="cursor-pointer hover:text-teal-400" />
            <AiFillInstagram size={25} className="cursor-pointer hover:text-teal-400" />
            <AiFillYoutube size={25} className="cursor-pointer hover:text-teal-400" />
          </div>
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold text-teal-300">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold text-teal-300">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold text-teal-300">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Ananya. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
            className="w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
