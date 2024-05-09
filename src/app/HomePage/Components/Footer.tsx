import Link from "next/link";
import React from "react";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-2 justify-between mx-auto py-14">
        <div className="space-x-5">
          <Link href="/home">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/showcase">Showcase</Link>
        </div>
        <p>© Uqiflow 2024 • All rights reserved.</p>
        <div className="flex text-xl gap-3">
        <FiFacebook />
        <FiTwitter />
        <FiLinkedin />
        </div>
    </div>
  );
};

export default Footer;
