import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";
import React from "react";

export const RotateRight = ({
  onclick,
  iconColor,
  rightRotateIcon,
}: {
  onclick: () => void;
  iconColor: string;
  rightRotateIcon: React.JSX.Element;
}) => {
  return (
    <>
      <ToolTip content="Rotate Right">
        <Button
          onClick={onclick}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {rightRotateIcon ? (
            rightRotateIcon
          ) : (
            <RotateCw size={15} color={iconColor} />
          )}
        </Button>
      </ToolTip>
    </>
  );
};
