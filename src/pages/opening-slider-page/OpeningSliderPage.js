"use client";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdOutlineArrowForward } from "react-icons/md";

const OpeningSliderPage = () => {
  useEffect(() => {
    if (!window?.customElements.get(`lottie-player`)) {
      import(`@lottiefiles/lottie-player`);
    }
  }, []);
  return (
    <section
      id="openingSlider"
      className="relative h-40 flex items-center w-full overflow-hidden "
    >
      <Marquee speed={40} pauseOnHover={true}>
        <div className="flex gap-40 items-center">
          {/* GET IN TOUCH */}
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

          {/* Video Informatif */}
          <div className="flex gap-3">
            <div className="rounded-xl w-[230px] h-[120px] bg-gray-300 flex justify-center items-center overflow-hidden">
              <Splide
                options={{
                  gap: 10,
                  arrows: false,
                  padding: { left: 30, right: 30 },
                  pagination: false,
                  type: "loop",
                  start: 0,
                  perPage: 1,
                  interval: 5000,
                  autoPlay: true,
                  focus: "center",
                }}
                onMounted={(splide) => {
                  splide.Components.Autoplay.play();
                }}
              >
                <SplideSlide>
                  <div className="flex justify-center rounded-xl overflow-hidden shadow-md">
                    <video
                      src="/assets/videos/mg_auto88group_1.mp4"
                      type="video/mp4"
                      width="auto"
                      height="auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="flex justify-center rounded-xl overflow-hidden shadow-md">
                    <video
                      src="/assets/videos/mg_ramadhan_1.mp4"
                      type="video/mp4"
                      width="auto"
                      height="auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="flex justify-center rounded-xl overflow-hidden shadow-md">
                    <video
                      src="/assets/videos/mg_auto88group_1.mp4"
                      type="video/mp4"
                      width="auto"
                      height="auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="flex justify-center rounded-xl overflow-hidden shadow-md">
                    <video
                      src="/assets/videos/mg_auto88group_1.mp4"
                      type="video/mp4"
                      width="auto"
                      height="auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="w-[300px]">
              <h3 className="text-xl text-slate-900 font-bold">
                Video Informatif
              </h3>
              <p className="text-base text-slate-900 mb-3">
                membuat video informatif dengan <br />
                riset & editing profesional
              </p>
              <div className="flex">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-brown-8 transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-brown-8 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <MdOutlineArrowForward color="green" />
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <MdOutlineArrowForward color="white" />
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Lihat Lainnya
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default OpeningSliderPage;
