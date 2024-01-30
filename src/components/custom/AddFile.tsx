/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  KeyboardEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToolTip } from "./Tooltip";
import { Button } from "../../components/ui/button";
import { Link2, Plus, Upload } from "lucide-react";
import { Input } from "../ui/input";
import { useFileIdentifier } from "@/hooks/useFileIdentifier";

export const AddFile = ({
  onAddFile,
  setFile,
  iconColor,
  file,
  uploadIcon,
}: any) => {
  const [addFile, setAddFile] = useState(false);
  const [urlImportPopUp, setUrlImportPopUp] = useState(false);
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const { setFileOrigin, setFileType } = useFileIdentifier();

  useEffect(() => {
    if (typeof file === "string") {
      setFile(file);
      fetch(file).then(async (response) => {
        const contentType = response.headers.get("Content-Type");
        if (contentType) {
          setFileOrigin("remote");
          setFileType(contentType);
        } else {
          console.warn("No Content-Type header found");
        }
      });
    } else if (file) {
      const url = URL.createObjectURL(file);
      setFileOrigin("local");
      setFileType(file.type);
      setFile(url || null);
      onAddFile();
    }
  }, []);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setFileOrigin("local");
      setFileType(files[0].type);
      setFile(url || null);
      onAddFile();
    }
    setAddFile(false);
  }

  // @ts-ignore
  const viewPDF: KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent
  ): void => {
    if (event.key === "Enter") {
      setAddFile(false);
      setUrlImportPopUp(false);
      setFile(inputRef.current.value);
      onAddFile();

      fetch(inputRef.current.value).then(async (response) => {
        const contentType = response.headers.get("Content-Type");
        if (contentType) {
          setFileOrigin("remote");
          setFileType(contentType);
        } else {
          console.warn("No Content-Type header found");
        }
      });
    }
  };

  return (
    <>
      <input type="file" hidden ref={fileRef} onChange={onFileChange} />
      <Popover open={addFile} onOpenChange={setAddFile}>
        <PopoverTrigger>
          <ToolTip content="Add File">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.2)] rounded-full"
            >
              {!uploadIcon ? (
                <Plus size={18} className={iconColor} />
              ) : (
                uploadIcon
              )}
            </Button>
          </ToolTip>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none mt-2 max-w-min mr-1">
          <div
            className={`py-2 px-3 flex gap-5 z-10 rounded-sm shadow-lg bg-[#323639]`}
          >
            <div className="flex gap-1 text-white flex-col items-center">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-slate-700 border-slate-600"
                onClick={() => fileRef.current.click()}
              >
                <Upload size={18} color="#fff" />
              </Button>
              <h6 className="text-sm">Local</h6>
            </div>
            <div className="flex gap-1 text-white flex-col items-center">
              <Dialog open={urlImportPopUp} onOpenChange={setUrlImportPopUp}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="bg-transparent hover:bg-slate-700 border-slate-600"
                  >
                    <Link2 size={18} color="#fff" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Enter the URL</DialogTitle>
                  </DialogHeader>
                  <Input
                    id="url"
                    className="w-full"
                    onKeyUp={viewPDF}
                    ref={inputRef}
                  />
                </DialogContent>
              </Dialog>

              <h6 className="text-sm">URL</h6>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
