import { ToolTip } from "./Tooltip";
import { Button } from "../ui/button";
import { Printer } from "lucide-react";

export const Print = ({
  onclick,
  iconColor,
  printIcon,
}: {
  onclick: () => void;
  iconColor: string;
  printIcon: React.JSX.Element;
}) => {
  return (
    <>
      <ToolTip content="Print">
        <Button
          onClick={onclick}
          size="icon"
          className="p-2 bg-transparent h-min w-min hover:bg-[rgba(0,0,0,0.2)]"
        >
          {printIcon ? printIcon : <Printer size={15} color={iconColor} />}
        </Button>
      </ToolTip>
    </>
  );
};
