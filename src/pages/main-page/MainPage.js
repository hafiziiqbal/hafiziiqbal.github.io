const MainPage = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[600px] max-w-screen-xl flex  mx-auto p-4"
    >
      <div className=" w-2/4 flex items-center h-full">
        <div className="space-y-5">
          <h1 className="text-base text-brown-7 font-bold">
            Hey There 👋 I am
            <br />
            <span className="text-5xl text-slate-900">Hafizi Iqbal</span>
          </h1>

          <h2 className="text-xl font-semibold">
            <span className="text-gray-400 ">Professional </span>
            Graphic Designer | Programmer
          </h2>

          <p className="text-base text-gray-400 font-semibold">
            Saya adalah desainer grafis dan programmer. Saya sudah berpengalaman
            di dunia desain grafis kurang lebih 5 tahun & web programming kurang
            lebih 3 tahun
          </p>

          <div className="flex gap-4 py-5">
            <button
              type="button"
              className="rounded-full px-5 py-3 text-base font-medium text-center bg-brown-5 hover:bg-brown-7 focus:outline-none focus:ring-brown-4 focus:ring-4  text-white"
            >
              Hubungi Saya
            </button>
            <button
              type="button"
              className="rounded-full px-5 py-3 text-base  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Lihat Lainnya
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-2/4 flex items-end h-full right-0">
        <img className="z-20" src="/assets/images/img-fizi.png"></img>
        <div className="absolute right-0 z-10">
          <svg
            width="491"
            height="487"
            viewBox="0 0 491 487"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M315 0C380.187 0 440.749 19.801 491 53.7164V487H51.0607C18.7696 437.549 0 378.467 0 315C0 141.03 141.03 0 315 0Z"
              fill="#6B4739"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
