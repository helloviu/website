/*
 * This file defines the Download component, which is a reusable button
 * with a download icon, wrapped in a Tooltip for enhanced user experience.
 * The Download component takes a file name and a callback function to handle the
 * download action.
 */

import { Download as DOWNLOAD } from "lucide-react";
import { Button } from "../ui/button";
import { ToolTip } from "./Tooltip";

export const Download = ({
  file,
  onclick,
  iconColor,
  downloadIcon,
}: {
  file: string;
  iconColor: string;
  onclick: (x: string) => void;
  downloadIcon: React.JSX.Element;
}) => {
  return (
    <>
      <ToolTip content="Download">
        <Button
          onClick={() => {
            onclick(file);
          }}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {downloadIcon ? (
            downloadIcon
          ) : (
            <DOWNLOAD size={15} color={iconColor} />
          )}
        </Button>
      </ToolTip>
    </>
  );
};
