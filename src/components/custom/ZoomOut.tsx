/**
 * This file defines the ZoomOut component, which is a button for zooming out.
 * The ZoomOut component takes a callback function as a prop, allowing the parent
 * component to handle the zoom-out action by updating the zoom level.
 */

import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { ZoomOut as ZoomOUT } from "lucide-react";
import React from "react";

export const ZoomOut = ({
  iconColor,
  onclick,
  scale,
  onZoomOut,
  zoomOutIcon,
}: {
  onclick: (callBack: (x: number) => number) => void;
  iconColor: string;
  scale: number;
  onZoomOut: (x: number) => void;
  zoomOutIcon: React.JSX.Element
}) => {
  return (
    <>
      <ToolTip content="Zoom In">
        <Button
          onClick={() => {
            onZoomOut(scale - 0.1);
            onclick((e) => e - 0.1);
          }}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {zoomOutIcon?zoomOutIcon:<ZoomOUT size={15} color={iconColor} />}
        </Button>
      </ToolTip>
    </>
  );
};
