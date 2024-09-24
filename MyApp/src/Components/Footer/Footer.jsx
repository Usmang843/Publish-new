import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Customer Care
              </h2>
              <ul className="text-gray-500 font-medium ">
                <li className="mb-4 text-sm">
                  Help Center <br />
                  How to Buy
                  <br />
                  Corporate & Bulk Purchasing
                  <br />
                  Returns & Refunds
                  <br />
                  Daraz Shop
                  <br />
                  Contact Us
                  <br />
                  Purchase Protection
                  <br />
                  Daraz Pick up Points
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Daraz
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  About Us
                  <br />
                  Digital Payments
                  <br />
                  Daraz Donates
                  <br />
                  Daraz Blog
                  <br />
                  Terms & Conditions
                  <br />
                  Privacy Policy
                  <br />
                  NTN Number : 4012118-6
                  <br />
                  STRN Number : 1700401211818
                  <br />
                  Online Shopping App
                  <br />
                  Online Grocery Shopping
                  <br />
                  Daraz Exclusive
                  <br />
                  Daraz University
                  <br />
                  Sell on Daraz
                  <br />
                  Join Daraz Affiliate Program
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4"> Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Usman Ur Rehman All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
