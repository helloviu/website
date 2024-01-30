/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export const PrintZone = ({
  printStatus,
  printPages,
  onLoad,
  setPrintStatus,
  setPrintPercentage,
  setPrintPages,
}: any) => {
  const container = useMemo(() => {
    const zoneEle = document.querySelector(".rpv-print__zone");
    if (zoneEle) {
      return zoneEle;
    }

    const div = document.createElement("div");
    div.classList.add("rpv-print__zone");
    div.id = "print-df-z";
    div.setAttribute("data-testid", "print__zone");
    document.body.appendChild(div);
    return div;
  }, []);

  useEffect(() => {
    if (printStatus === "READY") {
      console.log("ready");
      document.documentElement.classList.add("rpv-print__html-printing");
      document.body.classList.add("rpv-print__body-printing");
      window.print();
    }
    const handler = (): void => {
      if (printStatus === "READY") {
        document.documentElement.classList.remove("rpv-print__html-printing");
        document.body.classList.remove("rpv-print__body-printing");

        // Remove the container
        const zones = document.querySelectorAll(".rpv-print__zone");
        if (zones) {
          zones.forEach((zoneEle) => {
            (zoneEle?.parentElement as HTMLElement).removeChild(zoneEle);
          });
        }

        // Remove the handler
        document.removeEventListener("mousemove", handler);
        setPrintStatus("NOT_READY");
        setPrintPages([]);
        setPrintPercentage(0);
      }
    };
    document.addEventListener("mousemove", handler);

    return (): void => document.removeEventListener("mousemove", handler);
  }, [printStatus]);

  return createPortal(
    <>
      {printPages.map((page: any, loopIndex: any) => (
        <PrintPages
          pageIndex={loopIndex}
          canvas={page.canvas}
          onLoad={onLoad}
          _id={page.index}
        />
      ))}
      <style
        dangerouslySetInnerHTML={{
          __html: `@page { size: ${594}pt ${792}pt }`,
        }}
      ></style>
    </>,
    container
  );
};

const PrintPages = ({ pageIndex, canvas, onLoad, _id }: any) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (typeof canvas === "string") {
      setUrl(canvas);
    } else if ("toBlob" in canvas && "createObjectURL" in URL) {
      canvas.toBlob((blob: Blob | MediaSource) => {
        setUrl(URL.createObjectURL(blob));
      });
    } else {
      setUrl(canvas.toDataURL());
    }
  }, []);
  return (
    <div className="rpv-print__page">
      <img
        data-testid={`print__thumbnail-${pageIndex}`}
        src={url}
        onLoad={() => onLoad(_id)}
      />
    </div>
  );
};
