import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";
import React from "react";

export const RotateLeft = ({
  onclick,
  iconColor,
  leftRotateIcon,
}: {
  onclick: () => void;
  iconColor: string;
  leftRotateIcon: React.JSX.Element;
}) => {
  return (
    <>
      <ToolTip content="Rotate Left">
        <Button
          onClick={onclick}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {leftRotateIcon ? (
            leftRotateIcon
          ) : (
            <RotateCcw size={15} color={iconColor} />
          )}
        </Button>
      </ToolTip>
    </>
  );
};
