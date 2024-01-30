/**
 * This file defines the Tooltip component wrapper, which includes the necessary components.
 * The ToolTip component is a wrapper that takes children and content as props, creating a tooltip
 * with the specified content around the provided children.
 */

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

export const ToolTip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent className="bg-black text-white text-[12px]">
            {content}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
