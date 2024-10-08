import Link from "next/link";

export default function Home() {
  return (
    <div className="py-9 bg-gradient-to-r from-main  to-secondry overflow-y-hidden">
      {/* Code block starts */}
      <div className="w-full px-6">
        <div className="mt-8 relative rounded-lg bg-clip-padding bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <img
            className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
            alt="bg"
          />
          <img
            className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
            alt="bg"
          />
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              Your one stop for everything Wrestling.
            </h1>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <Link href="/HomeApp">
              <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-main	focus:ring-white rounded text-main px-4 sm:px-8 py-1 sm:py-3 text-sm">
                Get Started
              </button>
            </Link>
            <button className="hover:bg-white hover:text-main lg:text-xl hover:border-main ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-main focus:ring-white  rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png"
              alt="Sample Page"
              role="img"
            />
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
}
