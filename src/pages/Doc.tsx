function Doc() {
  return (
    <div>
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <div className="border border-l-0 border-t-0 border-b-0 fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
          <nav className="sticky top-[4.5rem] pr-4 text-base lg:text-sm xl:w-72 xl:pr-16">
            <ul
              role="list"
              className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8"
            >
              <li>
                <h3 className="font-semibold tracking-tight text-slate-900">
                  Getting started
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-slate-900 hover:text-slate-800">
                      Quick start guide
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-slate-600 hover:text-slate-800">
                      Installation
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-semibold tracking-tight text-slate-900">
                  Customization
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-slate-600 hover:text-slate-800">
                      Props
                    </a>
                  </li>
                  <ul className="pl-2">
                    <ul>
                      <li>
                        <a
                          href="#showLeftRotateButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showLeftRotateButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showRightRotateButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showRightRotateButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showZoomInButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showZoomInButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showZoomOutButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showZoomOutButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showPrintButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showPrintButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showObjectExplorer"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showObjectExplorer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showDownloadButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showDownloadButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showFullScreenButton"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showFullScreenButton
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showPageCount"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showPageCount
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showPageUp"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showPageUp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#showPageDown"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          showPageDown
                        </a>
                      </li>
                      <li>
                        <a
                          href="#toolbarBorderColor"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          toolbarBorderColor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#toolbarBackground"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          toolbarBackground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#iconColor"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          iconColor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onRotateLeft"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onRotateLeft
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onRotateRight"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onRotateRight
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onZoomIn"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onZoomIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onZoomOut"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onZoomOut
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onPageChange"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onPageChange
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onPrint"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onPrint
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onDownload"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onDownload
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onFullScreen"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onFullScreen
                        </a>
                      </li>
                      <li>
                        <a
                          href="#onAddFile"
                          className="text-slate-600 hover:text-slate-800"
                        >
                          onAddFile
                        </a>
                      </li>
                    </ul>
                  </ul>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article className="">
            <header className="">
              <p className="text-base font-medium text-slate-500">
                Getting started
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Quick start guide
              </h1>
            </header>

            <p className="mt-2 text-xl text-slate-600">
              Need to get started quickly with HelloView? You will learn all the
              basics in just minutes.
            </p>

            <h3 className="mt-16 text-base font-bold tracking-tight text-slate-900">
              Get set up quickly
            </h3>

            <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <li>
                <a
                  href="#"
                  className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
                >
                  <h4 className="font-bold tracking-tight text-slate-900">
                    1. Add HelloView to the project
                  </h4>

                  <p className="text-slate-600">
                    Put the{" "}
                    <span className="inline-block px-2 bg-gray-300 border rounded-md">
                      dist
                    </span>{" "}
                    folder anywhere (root prefered) in your project. You can
                    rename it optionally.
                    <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                      <code className="text-sm text-gray-600">
                        {`
  ./
  |--node_modules/
  |--src/
  |  |---Component.tsx
  |--helloView_dist/   <-- put it here or anywhere, also you can rename it.
  |--App.tsx
  |--package.json
  ....
                       `}
                      </code>
                    </pre>
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
                >
                  <h4 className="font-bold tracking-tight text-slate-900">
                    2. Add the component
                  </h4>

                  <p className="text-slate-600">
                    Import the component in your project along with it's css
                    file and pass your file URL or the file object. Also make
                    sure to wrap it in a component with fixed height and width
                    because by default the viewer takes the full height and
                    width of the parrent.
                    <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                      <code className="text-sm text-white">
                        <span className="text-gray-600">{`// ... your code`}</span>
                        <br />
                        <span className="text-[#bd4ce7]">import</span>
                        <span>{` {HelloView} `}</span>
                        <span className="text-[#bd4ce7]">from</span>
                        <span className="text-[#ffc34d]">{` "/path-to-our-dist-folder"`}</span>
                        ;
                        <br />
                        <span className="text-[#bd4ce7]">import</span>
                        <span className="text-[#ffc34d]">{` "/path-to-our-dist-folder/style.css"`}</span>
                        ;
                        <br />
                        <br />
                        <span className="text-[#bd4ce7]">function</span>
                        <span className="text-[#ffc34d]">{` App()`}</span>
                        <span className="text-[#ffc34d]">{`{ `}</span>
                        <br />
                        <span className="text-[#bd4ce7]">{` return ( `}</span>
                        <br />
                        <span>{`  <`}</span>
                        <span className="text-[#ce4838]">{`div `}</span>
                        <span className="text-[#ffc34d]">{`className=`}</span>
                        <span className="text-[#12d071]">{`"h-screen"`}</span>
                        <span>{`>`}</span>
                        <span className="text-gray-600">{`  // By default the viewer takes full height and width of it's parrent so you need to wrap it arround a parrent and give it a fixed height width`}</span>
                        <br />
                        <span>{`    <`}</span>
                        <span className="text-[#ce4838]">{`HelloView`}</span>
                        <br />
                        <span className="text-[#ffc34d]">{`      file`}</span>
                        <span className="text-[#ce4838]">{`=`}</span>
                        <span className="text-[#4d54a5]">{`{`}</span>
                        <span className="text-[#12d0c6]">{`yourfile_url`}</span>
                        <span className="text-[#4d54a5]">{`}`}</span>
                        <span className="text-gray-600">{`  // Pass the URL`}</span>
                        <br />
                        <span>{`    />`}</span>
                        <br />
                        <span>{`  </`}</span>
                        <span className="text-[#ce4838]">{`div`}</span>
                        <span>{`>`}</span>
                        <br />
                        <span className="text-[#bd4ce7]">{` )`}</span>;
                        <br />
                        <span className="text-[#ffc34d]">{`}`}</span>;
                      </code>
                    </pre>
                  </p>
                </a>
              </li>

              <li className="col-span-1 sm:col-span-2">
                <a
                  href="#"
                  className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
                >
                  <h4 className="font-bold tracking-tight text-slate-900">
                    Customize it
                  </h4>

                  <p className="text-slate-600">
                    Customise it as your own
                    <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                      <code className="text-sm text-white">
                        <span className="text-gray-600">{`// ... your code`}</span>
                        <br />
                        <span className="text-[#bd4ce7]">import</span>
                        <span>{` {HelloView} `}</span>
                        <span className="text-[#bd4ce7]">from</span>
                        <span className="text-[#ffc34d]">{` "/path-to-our-dist-folder"`}</span>
                        ;
                        <br />
                        <span className="text-[#bd4ce7]">import</span>
                        <span className="text-[#ffc34d]">{` "/path-to-our-dist-folder/style.css"`}</span>
                        ;
                        <br />
                        <br />
                        <span className="text-[#bd4ce7]">function</span>
                        <span className="text-[#ffc34d]">{` App()`}</span>
                        <span className="text-[#ffc34d]">{`{ `}</span>
                        <br />
                        <span className="text-[#bd4ce7]">{` return ( `}</span>
                        <br />
                        <span>{`  <`}</span>
                        <span className="text-[#ce4838]">{`HelloView`}</span>
                        <br />
                        <span className="text-[#ffc34d]">{`      showLeftRotateButton`}</span>
                        <span className="text-[#ce4838]">{`=`}</span>
                        <span className="text-[#4d54a5]">{`{`}</span>
                        <span className="text-[#12d0c6]">{`false`}</span>
                        <span className="text-[#4d54a5]">{`}`}</span>
                        <span className="text-gray-600">{`  // To hide the left rotation button`}</span>
                        <br />
                        <span className="text-[#ffc34d]">{`      showPrintButton`}</span>
                        <span className="text-[#ce4838]">{`=`}</span>
                        <span className="text-[#4d54a5]">{`{`}</span>
                        <span className="text-[#12d0c6]">{`false`}</span>
                        <span className="text-[#4d54a5]">{`}`}</span>
                        <span className="text-gray-600">{`  // To hide the print button`}</span>
                        <br />
                        <span className="text-[#ffc34d]">{`      onDownload`}</span>
                        <span className="text-[#ce4838]">{`=`}</span>
                        <span className="text-[#4d54a5]">{`{`}</span>
                        <span className="text-[#12d0c6]">{`yourFunction`}</span>
                        <span className="text-[#4d54a5]">{`}`}</span>
                        <span className="text-gray-600">{`  // 'yourFunction' will get called when someone clicks on the download button`}</span>
                        <br />
                        <span className="text-gray-600">{`      ... to view all the props check props section`}</span>
                        <br />
                        <span>{`  />`}</span>
                        <br />
                        <span className="text-[#bd4ce7]">{` )`}</span>;
                        <br />
                        <span className="text-[#ffc34d]">{`}`}</span>;
                      </code>
                    </pre>
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article
            className="mt-7 pt-7 border border-l-0 border-r-0 border-b-0"
            id="installation"
          >
            <header className="mt-2">
              <p className="text-base font-medium text-slate-500">
                Installation
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Quick install guide
              </h1>
            </header>

            <p className="mt-3 text-lg text-slate-600">
              You can build from our source code or you can simply copy paste
              the build folder to you project. Follow the below steps to build
              from source code.
            </p>
            <ol className="list-decimal mt-5 text-lg pl-4">
              <li>
                Open the source code folder in a terminal
                <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                  <code className="text-sm text-white">
                    <span className="text-gray-600">{`/home/HelloView:$ `}</span>
                  </code>
                </pre>
              </li>
              <li className="mt-2">
                Make sure you have{" "}
                <a
                  href="https://nodejs.org/"
                  className="underline text-blue-700"
                >
                  NodeJs
                </a>{" "}
                installed in your system
                <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                  <code className="text-sm text-white">
                    <span className="text-gray-600">{`/home/HelloView:$ `}</span>
                    <span className="text-white">{`node -v`}</span>
                    <br />
                    <span className="text-white">{`v18.19.0`}</span>
                  </code>
                </pre>
              </li>
              <li className="mt-2">
                Run the build command.
                <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                  <code className="text-sm text-white">
                    <span className="text-gray-600">{`/home/HelloView:$ `}</span>
                    <span className="text-white">{` npm run build`}</span>
                  </code>
                </pre>
              </li>
              <li className="mt-2">
                At the end you should have an output like this
                <pre className="language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                  <code className="text-sm text-white">
                    <span className="text-lime-500">{` ✓ built in 6.73s`}</span>
                  </code>
                </pre>
              </li>
              <li className="mt-2">
                After successfull build you will have a dist folder
              </li>
              <li className="mt-2">
                Now copy and paste the dist folder to a project where you want
                to use it
              </li>
            </ol>
          </article>
          <article
            className="mt-7 pt-7 border border-l-0 border-r-0 border-b-0"
            id="props"
          >
            <header className="mt-2">
              <p className="text-base font-medium text-slate-500">
                Customization
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Props guide
              </h1>
            </header>

            <p className="mt-3 text-lg text-slate-600">
              You can customize the entire component with diffrent props, go
              ahead and make it your own.
            </p>

            <div className="mt-7">
              <div id="file">
                <h4 className="relative group font-bold text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span className="underline"> file (string | File)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Pass the file url or File object to the component. If you
                  provide an URL or File it will open it by default. It will
                  still work if you do not pass anything because it has it's
                  built in add file option.
                  <div className="mt-3 my-6 bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                    Please be aware that if you are providing a file URL, ensure
                    that the domain where your application is hosted has access
                    to the specific domain from which you intend to retrieve the
                    file. Otherwise you might get into CORS issues.
                  </div>
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">null</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      file`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`http://myfile.com/file.pdf`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // Pass the file URL or File object`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showLeftRotateButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showLeftRotateButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide left rotation button from
                  the toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showLeftRotateButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the left rotation button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showRightRotateButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showRightRotateButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide right rotation button from
                  the toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showRightRotateButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the right rotation button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showZoomInButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showZoomInButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide ZoomIn button from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showZoomInButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the ZoomIn button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showZoomOutButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showZoomOutButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide ZoomOut button from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showZoomOutButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the ZoomOut button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showPrintButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showPrintButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide print button from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showPrintButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the print button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showObjectExplorer">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showObjectExplorer (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide object explorer button from
                  the toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showObjectExplorer`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the object explorer button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showDownloadButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showDownloadButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide download button from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showDownloadButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the download button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showFullScreenButton">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showFullScreenButton (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide full screen button from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showFullScreenButton`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the full screen button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showPageCount">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showPageCount (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide page count from the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className=" mt-2 language-javascript bg-[#262a33] rounded-md p-2  overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`HelloView`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showPageCount`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the page count`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showPageUp">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showPageUp (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide the 'Page Up' button in the
                  toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showPageUp`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the 'Page Up' button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="showPageDown">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>showPageDown (Boolean)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  You can use this prop to show/hide the 'Page Down' button in
                  the toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">true</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      showPageDown`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`{`}</span>
                      <span className="text-[#12d0c6]">{`false`}</span>
                      <span className="text-[#4d54a5]">{`}`}</span>
                      <span className="text-gray-600">{`  // To hide the 'Page Down' button`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="toolbarBorderColor">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>toolbarBorderColor (String)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  This prop allows you to set the color of the toolbar border.
                  <p className="mt-2 text-slate-900">
                    Default value:{" "}
                    <span className="text-slate-500">undefined</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      toolbarBorderColor`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`'yourColor'`}</span>
                      <span className="text-gray-600">{`  // Set toolbar border color`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="toolbarBackground">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>toolbarBackground (String)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Use this prop to set the background color of the toolbar.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">#eee</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      toolbarBackground`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`'yourColor'`}</span>
                      <span className="text-gray-600">{`  // Set toolbar background color`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="iconColor">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>iconColor (String)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Customize the color of icons in the toolbar using this prop.
                  <p className="mt-2 text-slate-900">
                    Default value: <span className="text-slate-500">#333</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      iconColor`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`'yourColor'`}</span>
                      <span className="text-gray-600">{`  // Set icon color`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onRotateLeft">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onRotateLeft (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  This prop allows you to specify a function that will be called
                  when the 'Rotate Left' action is triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: number) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onRotateLeft`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Rotate Left' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onRotateRight">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onRotateRight (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Define a function to be executed when the 'Rotate Right'
                  action is triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: number) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onRotateRight`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Rotate Right' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onZoomIn">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onZoomIn (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Specify a function to be called when the 'Zoom In' action is
                  triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: number) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onZoomIn`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Zoom In' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onZoomOut">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onZoomOut (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Define a function to be executed when the 'Zoom Out' action is
                  triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: number) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onZoomOut`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Zoom Out' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onPageChange">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onPageChange (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Use this prop to define a function that will be called when
                  the page changes.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: number) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onPageChange`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle page change`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onPrint">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onPrint (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Specify a function to be called when the 'Print' action is
                  triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`() => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onPrint`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`() => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Print' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onDownload">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onDownload (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Define a function to be executed when the 'Download' action is
                  triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`() => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onDownload`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`() => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Download' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onFullScreen">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onFullScreen (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Use this prop to specify a function that will be called when
                  the 'Full Screen' action is triggered.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: boolean) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onFullScreen`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle 'Full Screen' action`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>

              <div className="mt-8" id="onAddFile">
                <h4 className="relative group font-bold underline text-xl text-slate-700 hover:text-slate-800 cursor-pointer">
                  <span className="absolute text-muted group-hover:text-muted-foreground right-[101%] no-underline font-extrabold text-3xl">
                    #
                  </span>
                  <span>onAddFile (Function)</span>:
                </h4>
                <p className="mt-2 text-lg text-slate-500">
                  Specify a function to be called when a file is added.
                  <p className="mt-2 text-slate-900">
                    Signature:{" "}
                    <span className="text-slate-500">{`(x: string | null) => void`}</span>
                  </p>
                  <pre className="mt-2 language-javascript bg-[#262a33] rounded-md p-2 overflow-auto">
                    <code className="text-sm text-white">
                      <span>{`  <`}</span>
                      <span className="text-[#ce4838]">{`PDFViewer`}</span>
                      <br />
                      <span className="text-[#ffc34d]">{`      onAddFile`}</span>
                      <span className="text-[#ce4838]">{`=`}</span>
                      <span className="text-[#4d54a5]">{`(x) => { /* Your implementation */ }`}</span>
                      <span className="text-gray-600">{`  // Handle file addition`}</span>
                      <br />
                      <span>{`  />`}</span>
                    </code>
                  </pre>
                </p>
              </div>
            </div>
            <h3 className="mt-8 text-base font-bold tracking-tight text-slate-900">
              Have questions?
            </h3>

            <p className="text-slate-900">
              Still have questions?{" "}
              <a
                href="mailto:ask@helloview.in"
                className="underline hover:no-underline"
              >
                Talk to support
              </a>
              .
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Doc;
