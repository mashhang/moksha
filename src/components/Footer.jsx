import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mr-5">
        <img
          src="src/assets/logo.svg"
          alt=""
          className="h-[50px] object-contain"
        />
        <div className="flex flex-row justify-end">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px] pr-10"
            >
              <h4 className="font-poppins font-medium text-[15px] leading-[27px] text-gray-700">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[13px] leading-[24px] text-gray-500 hover:text-gray-600 ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="text-[13px] text-gray-400 mt-[100px]">
      <p>© 2024 Moksha. All rights reserved.</p>
    </div>
  </section>
);

export default Footer;
