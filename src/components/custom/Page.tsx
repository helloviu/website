/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from "react";
import { Page } from "react-pdf";

export const DocumentPage = ({
  index,
  scale,
  angle,
  setCurrentId,
  maxWidth,
  fileType = "pdf",
  encodedData = null,
}: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const intersectionTracker = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting;
        if (isVisible) {
          // @ts-ignore
          setCurrentId(containerRef.current.id);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const startObserve = () => {
    // @ts-ignore
    intersectionTracker.observe(containerRef.current);
  };

  return (
    <div
      ref={containerRef}
      className="my-1"
      id={`page_${index + 1}`}
    >
      {fileType === "pdf" ? (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          canvasBackground="#fff"
          width={maxWidth}
          scale={scale}
          height={18}
          rotate={angle}
          onLoadSuccess={startObserve}
        />
      ) : (
        <div className="w-full flex items-center justify-center">
          <img src={encodedData} width={maxWidth} onLoad={startObserve} style={{
          transform:`rotate(${angle}deg) scale(${scale})`
        }} />
        </div>
      )}
    </div>
  );
};
