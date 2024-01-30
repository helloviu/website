/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IToolBarProps } from "@/types";
import { AddFile } from "./AddFile";
import { AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ToolTip } from "./Tooltip";
import { RotateRight } from "./RotateRight";
import { RotateLeft } from "./RotateLeft";
import { ZoomIn } from "./ZoomIn";
import { ZoomOut } from "./ZoomOut";
import { Print } from "./Print";
import { Download } from "./Download";
import { Fullscreen } from "./Fullscreen";
import { useFileIdentifier } from "@/hooks/useFileIdentifier";

export const ToolBar = ({
  showLeftRotateButton,
  showRightRotateButton,
  showZoomInButton,
  showZoomOutButton,
  showPrintButton,
  showObjectExplorer,
  showDownloadButton,
  showFullScreenButton,
  showPageCount,
  showPageUp,
  showPageDown,
  setCurrentMainId,
  pageNo,
  setPageNo,
  numPages,
  setIsHidden,
  setAngle,
  setScale,
  fileURL,
  setFileURL,
  // @ts-ignore
  setPrintPages,
  setShowPrintPreparing,
  toolbarBackground = "#eee",
  toolbarBorder = "rgba(0,0,0,0.2)",
  iconColor = "#333",
  onAddFile,
  onDownload,
  onFullScreen,
  onPrint,
  onRotateLeft,
  onRotateRight,
  onZoomIn,
  onZoomOut,
  angle,
  scale,
  file,
  uploadIcon,
  fullScreenIcon,
  downloadIcon,
  printIcon,
  leftRotateIcon,
  rightRotateIcon,
  zoomInIcon,
  zoomOutIcon,
  ExplorerButton,
}: IToolBarProps) => {
  const { state } = useFileIdentifier();
  /**
   * Downloads the specified file.
   * @param url - The URL of the file to download.
   */
  async function downloadFile(url: string) {
    onDownload();
    // Fetch the file and create a downloadable link
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement("a");
        const blobUrl = window.URL.createObjectURL(blob);

        // Set link properties and trigger click event
        link.href = blobUrl;
        link.download = `helloview_doc_${Date.now()}.${
          state.TYPE.split("/")[1]
        }`;
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  }

  // Function to rotate the content to the right
  const rotateRight = () => {
    onRotateRight(angle + 90 >= 360 ? 0 : angle + 90);
    setAngle((old) => (old + 90 >= 360 ? 0 : old + 90));
  };

  // Function to rotate the content to the left
  const rotateLeft = () => {
    onRotateLeft(angle - 90 <= -360 ? 0 : angle - 90);
    setAngle((old) => (old - 90 <= -360 ? 0 : old - 90));
  };

  // Function to print the content
  const printContent = () => {
    onPrint();
    setShowPrintPreparing(true);
    const html = [];
    for (let i = 1; i <= numPages; i++) {
      if (state.TYPE === "application/pdf") {
        html.push({
          canvas: document?.querySelector(
            `#page_${i} canvas`
          ) as HTMLCanvasElement,
          index: i,
        });
      } else {
        html.push({
          canvas: (
            document?.querySelector(`#page_${i} img`) as HTMLImageElement
          ).src,
          index: i,
        });
      }
    }
    setPrintPages(html);
  };

  // const fitToPage = () => {
  //   const containerWidth = document.getElementById("main-panel")?.clientWidth;
  //   const containerHeight = window.innerWidth; // You can adjust this as needed

  //   if (containerWidth && containerHeight) {
  //     const pageWidth = 800;
  //     const pageHeight = (containerHeight / containerWidth) * 800;

  //     const scaleX = containerWidth / pageWidth;
  //     const scaleY = containerHeight / pageHeight;

  //     // Set the minimum of scaleX and scaleY to fit the entire page within the container
  //     const fitToPageScale = Math.min(scaleX, scaleY);

  //     setScale(() => fitToPageScale);
  //     console.log(fitToPageScale);
  //   }
  // };

  return (
    <>
      <div className="absolute top-1 left-[50%] translate-x-[-50%] max-w-min z-10">
        <div
          className={`p-[5px] border shadow-xl  z-10 w-full flex rounded-full justify-between items-center`}
          style={{
            backgroundColor: toolbarBackground,
            borderColor: toolbarBorder,
          }}
        >
          <div className="flex items-center text-white gap-2 ">
            {showObjectExplorer ? (
              <ToolTip content="Explorer">
                {ExplorerButton ? (
                  <ExplorerButton onClick={() => setIsHidden((o) => !o)} />
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-slate-600 hover:bg-slate-700 rounded-full"
                  >
                    <AlignJustify
                      color="#fff"
                      className="cursor-pointer"
                      onClick={() => setIsHidden((o) => !o)}
                    />
                  </Button>
                )}
              </ToolTip>
            ) : null}
            <div className="text-[#333] text-sm">
              {fileURL ? (
                <>
                  {![
                    "image/png",
                    "image/jpeg",
                    "image/bmp",
                    "image/svg+xml",
                  ].includes(state.TYPE) ? (
                    <div className="flex items-center gap-1">
                      {showPageUp ? (
                        <ToolTip content="Page Up">
                          <ChevronUp
                            color="rgba(0,0,0,0.2)"
                            className=" hover:bg-[rgba(0,0,0,0.2)] rounded-md cursor-pointer"
                            size={19}
                            onClick={() => {
                              if (numPages && pageNo - 1 == 0) return;
                              const mainId = `page_${pageNo - 1}`;
                              setCurrentMainId(mainId);
                            }}
                          />
                        </ToolTip>
                      ) : null}
                      {showPageCount ? (
                        <>
                          <input
                            type="text"
                            value={pageNo}
                            onChange={(e) => {
                              if (numPages && Number(e.target.value) > numPages)
                                return;
                              setPageNo(Number(e.target.value));
                            }}
                            onKeyDown={(e) => {
                              if (numPages && pageNo > numPages) return;
                              if (e.key != "Enter") return;
                              const mainId = `page_${pageNo}`;
                              setCurrentMainId(mainId);
                            }}
                            className="w-9 border border-[rgba(0,0,0,0.2)] rounded-md bg-transparent p-1"
                          />
                          /<span>{numPages}</span>
                        </>
                      ) : null}
                      {showPageDown ? (
                        <ToolTip content="Page Down">
                          <ChevronDown
                            color="rgba(0,0,0,0.2)"
                            className=" hover:bg-[rgba(0,0,0,0.2)] rounded-md cursor-pointer"
                            size={19}
                            onClick={() => {
                              if (numPages && pageNo + 1 > numPages) return;
                              const mainId = `page_${pageNo + 1}`;
                              setCurrentMainId(mainId);
                            }}
                          />
                        </ToolTip>
                      ) : null}
                    </div>
                  ) : null}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex items-center  gap-2">
            {showLeftRotateButton && (
              <RotateLeft
                onclick={rotateLeft}
                iconColor={iconColor}
                leftRotateIcon={leftRotateIcon}
              />
            )}
            {showZoomInButton && (
              <ZoomIn
                onclick={setScale}
                iconColor={iconColor}
                scale={scale}
                onZoomIn={onZoomIn}
                zoomInIcon={zoomInIcon}
              />
            )}
            {showZoomOutButton && (
              <ZoomOut
                onclick={setScale}
                iconColor={iconColor}
                onZoomOut={onZoomOut}
                scale={scale}
                zoomOutIcon={zoomOutIcon}
              />
            )}
            {showRightRotateButton && (
              <RotateRight
                onclick={rotateRight}
                iconColor={iconColor}
                rightRotateIcon={rightRotateIcon}
              />
            )}
            {showPrintButton && (
              <Print
                onclick={printContent}
                iconColor={iconColor}
                printIcon={printIcon}
              />
            )}
            {showDownloadButton && (
              <Download
                file={fileURL as string}
                onclick={downloadFile}
                iconColor={iconColor}
                downloadIcon={downloadIcon}
              />
            )}
            {/* <Expand onClick={fitToPage} /> */}
            {showFullScreenButton && (
              <Fullscreen
                iconColor={iconColor}
                onFullScreen={onFullScreen}
                fullScreenIcon={fullScreenIcon}
              />
            )}
          </div>
          <AddFile
            onAddFile={onAddFile}
            setFile={setFileURL}
            iconColor={iconColor}
            file={file}
            uploadIcon={uploadIcon}
          />
        </div>
      </div>
    </>
  );
};
