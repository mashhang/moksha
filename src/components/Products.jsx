import React from "react";
import styles from "../styles";
import { sampleshirt } from "../assets";

const Products = () => (
  <div className="w-full pl-5 pr-5 py-24">
    <div className="flex mb-8 justify-between">
      <div className={`${styles.paragraph2}`}>
        <h1>New Releases</h1>
      </div>

      <div className={`${styles.paragraph2}`}>
        <h1>View More</h1>
      </div>
    </div>

    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-36">
      <li>
        <a href="#">
          <div className={`${styles.paragraph}`}>
            <div className="bg-gray-50 w-full rounded-lg overflow-hidden">
              <img
                className="object-cover object-center inset-0 overflow-hidden p-4 self-center"
                loading="lazy"
                sizes="(max-width: 576px)280px, (max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                src="src/assets/sampleshirt.png"
                alt=""
              />
            </div>

            <div className="flex mt-4 justify-between">
              <div className="">
                <p>Graphic Shirt 1</p>
              </div>

              <div className="">
                <p className="text-gray-500">$19.99</p>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className={`${styles.paragraph}`}>
            <div className="bg-gray-50 w-full rounded-lg overflow-hidden">
              <img
                className="object-cover object-center inset-0 overflow-hidden p-4 self-center"
                loading="lazy"
                sizes="(max-width: 576px)280px, (max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                src="src/assets/sampleshirt.png"
                alt=""
              />
            </div>

            <div className="flex mt-4 justify-between">
              <div className="">
                <p>Graphic Shirt 1</p>
              </div>

              <div className="">
                <p className="text-gray-500">$19.99</p>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className={`${styles.paragraph}`}>
            <div className="bg-gray-50 w-full rounded-lg overflow-hidden">
              <img
                className="object-cover object-center inset-0 overflow-hidden p-4 self-center"
                loading="lazy"
                sizes="(max-width: 576px)280px, (max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                src="src/assets/sampleshirt.png"
                alt=""
              />
            </div>

            <div className="flex mt-4 justify-between">
              <div className="">
                <p>Graphic Shirt 1</p>
              </div>

              <div className="">
                <p className="text-gray-500">$19.99</p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Products;
