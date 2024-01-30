/* eslint-disable @typescript-eslint/no-explicit-any */
import { Thumbnail as THUMBNAIL } from "react-pdf";

export const Thumbnail = ({
  index,
  currentId,
  setCurrentId,
  fileType = "pdf",
  encodedData = null,
}: any) => {
  return (
    <>
      <div id={`T_page_${index + 1}`} className="p-2">
        <div
          className={
            "T_" + currentId === `T_page_${index + 1}`
              ? "ring px-5 py-3"
              : " px-5 py-3"
          }
        >
          <div className="shadow-lg">
            {fileType === "pdf" ? (
              <THUMBNAIL
                key={`T_page_${index + 1}`}
                className="p-1 shadow"
                canvasBackground="#fff"
                pageIndex={index}
                width={150}
                onItemClick={() => {
                  setCurrentId(`page_${index + 1}`);
                }}
              />
            ) : (
              <img
                src={encodedData}
                onClick={() => {
                  setCurrentId(`page_${index + 1}`);
                }}
              />
            )}
          </div>
          <div className="flex items-center justify-center text-sm mt-2">
            Page: {index + 1}
          </div>
        </div>
      </div>
    </>
  );
};
