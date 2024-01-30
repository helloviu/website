/**
 * This file defines the ZoomIn component, which is a button for zooming in.
 * The ZoomIn component takes a callback function as a prop, allowing the parent
 * component to handle the zoom-in action by updating the zoom level. The callback
 * function should take the current zoom level as an argument and return the updated zoom level.
 */

import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { ZoomIn as ZoomIN } from "lucide-react";
import React from "react";

export const ZoomIn = ({
  iconColor,
  onclick,
  scale,
  onZoomIn,
  zoomInIcon,
}: {
  onclick: (callBack: (x: number) => number) => void;
  iconColor: string;
  scale: number;
  onZoomIn: (x: number) => void;
  zoomInIcon: React.JSX.Element;
}) => {
  return (
    <>
      <ToolTip content="Zoom In">
        <Button
          onClick={() => {
            onZoomIn(scale + 0.1);
            onclick((e) => e + 0.1);
          }}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {zoomInIcon ? zoomInIcon : <ZoomIN size={15} color={iconColor} />}
        </Button>
      </ToolTip>
    </>
  );
};
