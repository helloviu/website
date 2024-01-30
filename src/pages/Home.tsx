import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const location = useNavigate();

  return (
    <>
      <section>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="py-4 flex justify-end">
              <div className="flex gap-1 z-[99]">
                <Button
                  variant="link"
                  onClick={() => location("/documentation")}
                >
                  Docs
                </Button>
                <Button
                  className="rounded-full"
                  onClick={() => location("/playground")}
                >
                  Playground
                </Button>
              </div>
            </div>
            <div className="relative pt-36 ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  A feature rich,{" "}
                  <span className="text-blue-600">React component</span> to view
                  PDFs and Images
                </h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">
                Fully Customizable and configurable to blend in to your applications.
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                  <button
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max cursor-pointer"
                    onClick={() => location("/app")}
                  >
                    <span className="relative text-base font-semibold text-white">
                      Try Demo
                    </span>
                  </button>
                  <span
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max cursor-pointer"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="relative text-base font-semibold text-primary dark:text-white">
                      Contact Us
                    </span>
                  </span>
                </div>
                <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                      No Overhead
                    </h6>
                    <p className="mt-2 text-gray-500">
                      Anything you need we got you back!
                    </p>
                  </div>
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                      The smoothest
                    </h6>
                    <p className="mt-2 text-gray-500">
                      Handle large files smoothly
                    </p>
                  </div>
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                      0 Dependency
                    </h6>
                    <p className="mt-2 text-gray-500">
                      You do not have to install anything
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="features">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="p-3 w-full flex items-center justify-center">
                <div className="overflow-hidden rounded-lg ring-2 max-w-[90%]">
                  <img src="/vid.gif" alt="" className="border-red-800" />
                </div>
              </div>
            </div>
            <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
              <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition ">
                      Support Everything
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      We support a large variety of file formats as PDF, JPEG,
                      TIFF, BMP, PNG, TIF
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition ">
                      Zoom In, Zoom Out
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      You can set you zoom level
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition ">
                      Support URL
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      Need to read a PDF from URL? we got your back!
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition ">
                      Need more?
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      Contact us for more features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="solution" className="mt-4">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-sky-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                clip-rule="evenodd"
              />
            </svg>

            <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
              <div className="md:5/12 lg:w-1/2">
                <img
                  src="/pie.svg"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                  className="w-full"
                />
              </div>
              <div className="md:7/12 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  We have smething in our roadmap too!
                </h2>
                <p className="my-8 text-gray-600 dark:text-gray-300"></p>
                <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                  <div className="mt-8 flex gap-4 md:items-center">
                    <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-5/6">
                      <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                        Chat With your PDF
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We will have a feature with which you will be able to
                        chat with your pdf smoothly
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex gap-4 md:items-center">
                    <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-5/6">
                      <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                        Anotation
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Love some colors? we will add that too
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative py-16" id="contact">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="relative">
              <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                  Get Started now
                </h1>
                <p className="text-center text-xl text-gray-600 dark:text-gray-300">
                  Be a part of our journey. Contact us at
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                    <span className="relative text-base font-semibold text-white dark:text-dark">
                      ask@helloview.in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
