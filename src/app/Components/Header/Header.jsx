"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "../Buttons/BuyButton";
import useScrollHeader from "./useScrollHeader";

export default function Header() {
  const isScrolled = useScrollHeader(); // Using the custom hook

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Link href="/" className="">
            <Image src="/images/logon.webp" priority alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex space-x-12 items-center md:absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className={`text-lg font-bold uppercase tracking-wider hover:text-[#6B8375] transition ${
              isScrolled ? "text-[#1e1e1e]" : "text-[#1e1e1e]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-lg font-bold uppercase tracking-wider hover:text-[#6B8375] transition ${
              isScrolled ? "text-[#1e1e1e]" : "text-[#1e1e1e]"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/about-us"
            className={`text-lg font-bold uppercase tracking-wider hover:text-[#6B8375] transition ${
              isScrolled ? "text-[#1e1e1e]" : "text-[#1e1e1e]"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-bold uppercase tracking-wider hover:text-[#6B8375] transition ${
              isScrolled ? "text-[#1e1e1e]" : "text-[#1e1e1e]"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/help"
            className={`text-lg font-bold uppercase tracking-wider hover:text-[#6B8375] transition ${
              isScrolled ? "text-[#1e1e1e]" : "text-[#1e1e1e]"
            }`}
          >
            Help
          </Link>

        </nav>

        {/* Right Icons and Button */}
        <div className="flex items-center space-x-5">
          {/* Search Icon */}
          <button
            className={`hover:text-[#6B8375] focus:outline-none ${
              isScrolled ? "text-gray-700" : "text-gray-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <button
            className={`relative hover:text-[#6B8375] focus:outline-none ${
              isScrolled ? "text-gray-700" : "text-gray-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0h2v2H17V17z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Login Icon */}
          <button
            className={`hover:text-[#6B8375] focus:outline-none ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>

          {/* Call to Action Button */}
          <BuyButton text="Order Now" />
        </div>

        {/* Mobile Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button
            className={`hover:text-[#6B8375] focus:outline-none ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
