/**
 * This file defines the Fullscreen component, which is a button that toggles
 * between entering and exiting full screen mode.
 */

import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { Fullscreen as FullScreen } from "lucide-react";
import React, { useState } from "react";

export const Fullscreen = ({
  iconColor,
  onFullScreen,
  fullScreenIcon,
}: {
  iconColor: string;
  onFullScreen: (x: boolean) => void;
  fullScreenIcon: React.JSX.Element;
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <>
      <ToolTip content={fullScreen ? "Exit Full Screen" : "Full Screen"}>
        <Button
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
          onClick={() => {
            if (!fullScreen) {
              document.documentElement.requestFullscreen();
              setFullScreen(true);
              onFullScreen(true);
            } else {
              document.exitFullscreen();
              setFullScreen(false);
              onFullScreen(false);
            }
          }}
        >
          {fullScreenIcon ? (
            fullScreenIcon
          ) : (
            <FullScreen size={15} color={iconColor} />
          )}
        </Button>
      </ToolTip>
    </>
  );
};
