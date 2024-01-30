/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFileIdentifier } from "@/hooks/useFileIdentifier";
import { IRendererProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Document } from "react-pdf";
import UTIF from "utif";
import { DocumentPage } from "./Page";
import { Thumbnail } from "./Thumbnail";
import { RotateCw } from "lucide-react";
import { Loader } from "./Loader";

export const Renderer = ({
  showObjectExplorer,
  isHidden,
  fileURL,
  options,
  onDocumentLoadSuccess,
  numPages,
  setCurrentId,
  setCurrentMainId,
  angle,
  currentId,
  maxWidth,
  scale,
}: IRendererProps) => {
  const { state } = useFileIdentifier();

  useEffect(() => {
    console.log(state, fileURL);
  }, [state]);
  return (
    <>
      {state.TYPE === "application/pdf" ? (
        <PDFRenderer
          showObjectExplorer={showObjectExplorer}
          isHidden={isHidden}
          fileURL={fileURL}
          options={options}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          numPages={numPages}
          setCurrentId={setCurrentId}
          setCurrentMainId={setCurrentMainId}
          angle={angle}
          currentId={currentId}
          maxWidth={maxWidth}
          scale={scale}
        />
      ) : ["image/tiff", "image/tif"].includes(state.TYPE) ? (
        <TiffRenderer
          showObjectExplorer={showObjectExplorer}
          isHidden={isHidden}
          fileURL={fileURL}
          options={options}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          numPages={numPages}
          setCurrentId={setCurrentId}
          setCurrentMainId={setCurrentMainId}
          angle={angle}
          currentId={currentId}
          maxWidth={maxWidth}
          scale={scale}
        />
      ) : ["image/png", "image/jpeg", "image/bmp", "image/svg+xml"].includes(
          state.TYPE
        ) ? (
        <PngAndJpegRenderer
          showObjectExplorer={showObjectExplorer}
          isHidden={isHidden}
          fileURL={fileURL}
          options={options}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          numPages={numPages}
          setCurrentId={setCurrentId}
          setCurrentMainId={setCurrentMainId}
          angle={angle}
          currentId={currentId}
          maxWidth={maxWidth}
          scale={scale}
        />
      ) : null}
    </>
  );
};

const PDFRenderer = ({
  showObjectExplorer,
  isHidden,
  fileURL,
  options,
  onDocumentLoadSuccess,
  numPages,
  setCurrentId,
  setCurrentMainId,
  angle,
  currentId,
  maxWidth,
  scale,
}: IRendererProps) => {
  console.log(isHidden, showObjectExplorer)
  return (
    <>
      {showObjectExplorer ? (
        <div
          className="flex-1 max-w-min  bg-white overflow-auto"
          hidden={isHidden}
          id="thumb-panel"
        >
          <Document
            file={fileURL}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className="w-52"
            loading={<Loader type="THUMB" />}
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Thumbnail
                key={`PVP_${index}`}
                index={index}
                currentId={currentId}
                setCurrentId={setCurrentMainId}
              />
            ))}
          </Document>
        </div>
      ) : null}
      <div
        className="flex-1 overflow-auto relative bg-[#b4b4b4]"
        id="main-panel"
      >
        <Document
          className="absolute left-[50%] translate-x-[-50%]"
          file={fileURL}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          loading={<Loader type="PDF" />}
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <DocumentPage
              key={`PP_${index}`}
              index={index}
              angle={angle}
              scale={scale}
              currentId={currentId}
              setCurrentId={setCurrentId}
              maxWidth={maxWidth}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

const TiffRenderer = ({
  showObjectExplorer,
  isHidden,
  fileURL,
  setCurrentId,
  setCurrentMainId,
  angle,
  currentId,
  maxWidth,
  scale,
  onDocumentLoadSuccess,
}: IRendererProps) => {
  const [tiffPages, setTiffPages] = useState<HTMLCanvasElement[]>([]);
  const [load, setLoad] = useState<boolean>(true);

  function imgLoaded(e: any) {
    const ifds = UTIF.decode(e.target.response);
    const _tiffs = ifds.map(function (ifd) {
      UTIF.decodeImage(e.target.response, ifd);
      const rgba = UTIF.toRGBA8(ifd);
      const canvas = document.createElement("canvas");
      canvas.width = ifd.width;
      canvas.height = ifd.height;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      const img = ctx.createImageData(ifd.width, ifd.height);
      img.data.set(rgba);
      ctx.putImageData(img, 0, 0);
      return canvas;
    });
    setLoad(false);
    setTiffPages(_tiffs);
    // @ts-ignore
    onDocumentLoadSuccess({ numPages: _tiffs.length });
  }
  async function displayTIFF(tiffUrl: string) {
    setLoad(true);
    const response = await axios.get(tiffUrl, {
      responseType: "arraybuffer",
    });
    imgLoaded({ target: { response: response.data } });
  }

  useEffect(() => {
    displayTIFF(fileURL);
  }, [fileURL]);

  return (
    <>
      {showObjectExplorer ? (
        <div
          className="flex-1 max-w-40  bg-white overflow-auto"
          hidden={isHidden}
          id="thumb-panel"
        >
          {load ? (
            <div className="w-full h-full gap-1 flex items-center justify-center">
              <RotateCw className="animate-spin" size={15} />{" "}
              <h1>Loading thumbnail...</h1>
            </div>
          ) : (
            tiffPages.map((e, index) => (
              <TiffRendererThumbHelper
                key={`PVP_${index}`}
                index={index}
                currentId={currentId}
                setCurrentId={setCurrentMainId}
                fileType="tiff"
                canvas={e}
              />
            ))
          )}
        </div>
      ) : null}
      <div
        className="flex-1 overflow-auto relative bg-[#b4b4b4]"
        id="main-panel"
      >
        {load ? (
          <div className="w-full h-full gap-1 flex items-center justify-center">
            <RotateCw className="animate-spin" size={15} />{" "}
            <h1>Loading file...</h1>
          </div>
        ) : (
          tiffPages.map((e, index) => (
            <TiffRendererHelper
              key={`PP_${index}`}
              index={index}
              angle={angle}
              scale={scale}
              currentId={currentId}
              setCurrentId={setCurrentId}
              maxWidth={maxWidth}
              fileType="tiff"
              canvas={e}
            />
          ))
        )}
      </div>
    </>
  );
};

const TiffRendererHelper = ({
  setCurrentId,
  angle,
  currentId,
  maxWidth,
  scale,
  index,
  canvas,
}: any) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if ("toBlob" in canvas && "createObjectURL" in URL) {
      canvas.toBlob((blob: Blob | MediaSource) => {
        setUrl(URL.createObjectURL(blob));
      });
    } else {
      setUrl(canvas.toDataURL());
    }
  }, []);
  return (
    url && (
      <DocumentPage
        key={`PP_${index}`}
        index={index}
        angle={angle}
        scale={scale}
        currentId={currentId}
        setCurrentId={setCurrentId}
        maxWidth={maxWidth}
        fileType="tiff"
        encodedData={url}
      />
    )
  );
};

const TiffRendererThumbHelper = ({
  currentId,
  setCurrentMainId,
  index,
  canvas,
}: any) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if ("toBlob" in canvas && "createObjectURL" in URL) {
      canvas.toBlob((blob: Blob | MediaSource) => {
        setUrl(URL.createObjectURL(blob));
      });
    } else {
      setUrl(canvas.toDataURL());
    }
  }, []);
  return (
    url && (
      <Thumbnail
        key={`PVP_${index}`}
        index={index}
        currentId={currentId}
        setCurrentId={setCurrentMainId}
        fileType="tiff"
        encodedData={url}
      />
    )
  );
};

const PngAndJpegRenderer = ({ fileURL, angle, scale }: IRendererProps) => {
  return (
    <>
      <div
        className="flex-1 overflow-auto relative bg-[#b4b4b4] w-full h-full flex items-center justify-center"
        id="main-panel"
      >
        <div>
          <img
            src={fileURL}
            alt=""
            style={{
              transform: `rotate(${angle}deg) scale(${scale})`,
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
