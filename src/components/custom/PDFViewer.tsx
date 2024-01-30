/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";

import { FileIdentifierProvider } from "@/hooks/useFileIdentifier";
import { IPDFViewerProps, PDFFile } from "@/types";
import { RotateCw } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { NoFile } from "./NoFile";
import { PrintZone } from "./PrintZone";
import { Renderer } from "./Renderer";
import { ToolBar } from "./Toolbar";

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "../../lib/pdf.worker.min.js",
  import.meta.url
).toString();
const maxWidth = 800;

function PDFViewer({
  showLeftRotateButton = true,
  showRightRotateButton = true,
  showZoomInButton = true,
  showZoomOutButton = true,
  showPrintButton = true,
  showObjectExplorer = true,
  showDownloadButton = true,
  showFullScreenButton = true,
  showPageCount = true,
  showPageUp = true,
  showPageDown = true,
  toolbarBackground = "#eee",
  toolbarBorderColor = "rgba(0,0,0,0.2)",
  iconColor = "#333",
  onAddFile = () => {},
  onDownload = () => {},
  onFullScreen = () => {},
  onPageChange = () => {},
  onPrint = () => {},
  onRotateLeft = () => {},
  onRotateRight = () => {},
  onZoomIn = () => {},
  onZoomOut = () => {},
  file = "",
  uploadIcon,
  fullScreenIcon,
  downloadIcon,
  printIcon,
  leftRotateIcon,
  rightRotateIcon,
  zoomInIcon,
  zoomOutIcon,
  ExplorerButton,
}: IPDFViewerProps) {
  const [fileURL, setFileURL] = useState<PDFFile | string>("");
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState(1);
  const [angle, setAngle] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [currentMainId, setCurrentMainId] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [printPages, setPrintPages] = useState([]);
  const [printStatus, setPrintStatus] = useState("NOT_READY");
  const [countPage] = useState(new Set());
  const [showPrintPreparing, setShowPrintPreparing] = useState(false);
  const [printPercentage, setPrintPercentage] = useState(0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentId) {
        document
          .getElementById(`T_${currentId}`)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 700);
    setPageNo(Number(currentId.split("_")[1]));
    onPageChange(Number(currentId.split("_")[1]));
  }, [currentId]);

  useEffect(() => {
    if (currentId) {
      const mainElement = document.getElementById(`${currentMainId}`);
      if (mainElement) {
        const mainContainer = document.getElementById("main-panel");
        // @ts-ignore
        mainContainer.scrollTop = mainElement.offsetTop;
      }
    }
  }, [currentMainId]);
  const countPages = (_id: number) => {
    countPage.add(_id);
    setPrintPercentage(Math.floor((countPage.size * 100) / numPages));
    if (countPage.size === numPages) {
      setPrintStatus("READY");
      setShowPrintPreparing(false);
    }
  };

  return (
    <>
      <div className="h-full w-full flex relative flex-col">
        <FileIdentifierProvider>
          <ToolBar
            {...{
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
              setAngle,
              setIsHidden,
              setScale,
              fileURL,
              setFileURL,
              printPages,
              angle,
              scale,
              setShowPrintPreparing,
              iconColor,
              toolbarBorder: toolbarBorderColor,
              toolbarBackground,
              onPrint,
              onRotateLeft,
              onRotateRight,
              onZoomIn,
              onZoomOut,
              onAddFile,
              onDownload,
              onFullScreen,
              file,
              uploadIcon,
              fullScreenIcon,
              setPrintPages,
              downloadIcon,
              printIcon,
              leftRotateIcon,
              rightRotateIcon,
              zoomInIcon,
              zoomOutIcon,
              ExplorerButton
            }}
            // @ts-ignore
            printPages={printPages}
          />
          <div className="flex h-full">
            {!fileURL ? (
              <NoFile />
            ) : (
              <Renderer
                angle={angle}
                scale={scale}
                options={options}
                isHidden={isHidden}
                maxWidth={maxWidth}
                numPages={numPages}
                currentId={currentId}
                fileURL={fileURL as string}
                setCurrentId={setCurrentId}
                setCurrentMainId={setCurrentMainId}
                showObjectExplorer={showObjectExplorer}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
              />
            )}
          </div>
          {printPages.length === numPages && (
            <PrintZone
              printStatus={printStatus}
              printPages={printPages}
              onLoad={countPages}
              setPrintStatus={setPrintStatus}
              setPrintPages={setPrintPages}
              setPrintPercentage={setPrintPercentage}
            />
          )}
          <AlertDialog open={showPrintPreparing}>
            <AlertDialogContent className="sm:max-w-[425px]">
              <div className="flex gap-2 items-center">
                <RotateCw size={18} className="animate-spin" />
                <span>Preparing...{printPercentage}%</span>
              </div>
              <Progress value={printPercentage} className="h-1" />
            </AlertDialogContent>
          </AlertDialog>
        </FileIdentifierProvider>
      </div>
    </>
  );
}

export default PDFViewer;
