import Image from "next/image";
import Link from "next/link";

import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="p-4 bg-[#082f49]">
      <div className="w-100 flex flex-col gap-2 md:flex-row items-center justify-around text-white ">
        <div className="flex flex-col md:flex-row justify-aroun items-center  gap-4">
          <div>
            <Image
              src="/images/logo/logo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </div>
          <div className="text-[#9ca3af]">
            <ul className="flex flex-row gap-10 justify-between">
              <li>
                <Link href="#" className="links">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="links">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="links">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="links">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex text-[#9ca3af] flew-row gap-10 items-center">
          <ul className="flex flex-row gap-4 justify-between">
            <li>
              <Link href="#" className="links">
                <BiLogoFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="links">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link href="#" className="links">
                <BsTwitter />
              </Link>
            </li>
          </ul>
          <span>
            <Link href="#" className="links">
              All rights reserved 2023 &copy;
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
