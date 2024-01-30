/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import PDFViewer from "@/components/custom/PDFViewer";

const Preview = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code} scope={{ React, PDFViewer }}>
      <div className="flex h-screen">
        <div className="w-[25%] h-full">
          <LiveEditor
            // className="h-full"
            style={{
              height: "100%",
              backgroundColor: "rgb(1, 22, 39)",
            }}
          />
        </div>
        <div className="relative flex-1 h-screen p-9">
          <div className="absolute top-0 left-0 right-0 bottom-0 border border-l-4">
            <LivePreview className="h-full"/>
          </div>
        </div>
      </div>
    </LiveProvider>
  );
};

function Playground() {
  const [code, _setCode] = useState(`
  // Change the below component to see how it will behave with diffrent props
  
  <PDFViewer
    showLeftRotateButton = {true}
    showRightRotateButton = {true}
    showZoomInButton = {true}
    showZoomOutButton = {true}
    showPrintButton = {true}
    showObjectExplorer = {true}
    showDownloadButton = {true}
    showFullScreenButton = {true}
    showPageCount = {true}
    showPageUp = {true}
    showPageDown = {true}
  />`);

  return (
    <div className="h-screen">
      <Preview code={code} />
    </div>
  );
}

export default Playground;
