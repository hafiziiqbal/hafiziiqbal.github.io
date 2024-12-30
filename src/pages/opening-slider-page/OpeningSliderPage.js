"use client";
import { useEffect } from "react";
import "@lottiefiles/lottie-player";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

import Marquee from "react-fast-marquee";

const OpeningSliderPage = () => {
  useEffect(() => {}, []);
  return (
    <section
      id="openingSlider"
      className="relative h-40 flex items-center w-full overflow-hidden whitespace-nowrap"
    >
      <Marquee pauseOnHover>
        <div className="relative flex items-center justify-center">
          <button className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-400 text-white flex items-center justify-center overflow-hidden group">
            {/* Icon Default */}
            <FaRegEnvelope
              color="black"
              className="absolute z-30 transition-opacity duration-500 group-hover:opacity-0"
              size={30}
            />
            {/* Icon Saat Hover */}
            <FaRegEnvelopeOpen
              className="absolute z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              size={30}
            />
            <span className="absolute inset-0 bg-brown-8 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100"></span>
          </button>

          <lottie-player
            autoplay
            loop
            mode="normal"
            src="/assets/lottie-files/get-in-touch.json"
            style={{ width: 130 }}
          ></lottie-player>
        </div>
      </Marquee>
    </section>
  );
};

export default OpeningSliderPage;
