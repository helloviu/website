import type { PDFDocumentProxy } from "pdfjs-dist";
import React from "react";

export interface IExplorButton{
   onClick: () => void 
}

/**
 * Interface defining properties for the PDF viewer component.
 */
export interface IPDFViewerProps {
  showLeftRotateButton?: boolean;
  showRightRotateButton?: boolean;
  showZoomInButton?: boolean;
  showZoomOutButton?: boolean;
  showPrintButton?: boolean;
  showObjectExplorer?: boolean;
  showDownloadButton?: boolean;
  showFullScreenButton?: boolean;
  showPageCount?: boolean;
  showPageUp?: boolean;
  showPageDown?: boolean;
  toolbarBorderColor?: string;
  toolbarBackground?: string;
  iconColor?: string;
  file?: string | File;
  uploadIcon: React.JSX.Element;
  downloadIcon: React.JSX.Element;
  fullScreenIcon: React.JSX.Element;
  printIcon: React.JSX.Element;
  leftRotateIcon: React.JSX.Element;
  rightRotateIcon: React.JSX.Element;
  zoomInIcon: React.JSX.Element;
  zoomOutIcon: React.JSX.Element;
  ExplorerButton: React.FC<IExplorButton>
  onRotateLeft?: (x: number) => void;
  onRotateRight?: (x: number) => void;
  onZoomIn?: (x: number) => void;
  onZoomOut?: (x: number) => void;
  onPageChange?: (x: number) => void;
  onPrint?: () => void;
  onDownload?: () => void;
  onFullScreen?: (x: boolean) => void;
  onAddFile?: (x: string | null) => void;
}

/**
 * Interface defining properties for the toolbar within the PDF viewer component.
 */
export interface IToolBarProps {
  showLeftRotateButton: boolean;
  showRightRotateButton: boolean;
  showZoomInButton: boolean;
  showZoomOutButton: boolean;
  showPrintButton: boolean;
  showObjectExplorer: boolean;
  showDownloadButton: boolean;
  showFullScreenButton: boolean;
  showPageCount: boolean;
  showPageUp: boolean;
  showPageDown: boolean;
  pageNo: number;
  numPages: number;
  fileURL: string;
  angle: number;
  scale: number;
  toolbarBorder: string;
  toolbarBackground: string;
  iconColor: string;
  file?: string | File;
  fullScreenIcon: React.JSX.Element;
  downloadIcon: React.JSX.Element;
  printIcon: React.JSX.Element;
  uploadIcon: React.JSX.Element;
  leftRotateIcon: React.JSX.Element;
  rightRotateIcon: React.JSX.Element;
  zoomInIcon: React.JSX.Element;
  zoomOutIcon: React.JSX.Element;
  ExplorerButton: React.FC<IExplorButton>
  setShowPrintPreparing: (x: boolean) => void;
  setFileURL: (x: string) => void;
  setPageNo: (x: number) => void;
  setCurrentMainId: (x: string) => void;
  setIsHidden: (callBack: (x: boolean) => boolean) => void;
  setAngle: (callBack: (x: number) => number) => void;
  setScale: (callBack: (x: number) => number) => void;
  onRotateLeft: (x: number) => void;
  onRotateRight: (x: number) => void;
  onZoomIn: (x: number) => void;
  onZoomOut: (x: number) => void;
  onFullScreen: (x: boolean) => void;
  onAddFile: (x: string | null) => void;
  onPrint: () => void;
  onDownload: () => void;
}

/** Type representing a PDF file, which can be a string (URL), File object, or null. */
export type PDFFile = string | File | null;

/** Interface defining options related to PDF rendering. */
interface IPDFOption {
  cMapUrl: string;
  standardFontDataUrl: string;
}

/**
 * Interface defining properties for the PDF renderer component.
 */
export interface IRendererProps {
  showObjectExplorer: boolean;
  isHidden: boolean;
  fileURL: string;
  numPages: number;
  maxWidth: number;
  angle: number;
  scale: number;
  currentId: string;
  options: IPDFOption;
  setCurrentId: (x: string) => void;
  setCurrentMainId: (x: string) => void;
  onDocumentLoadSuccess: (x: PDFDocumentProxy) => void;
}
