import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  DownloadIcon,
  ImageIcon,
  Link2Icon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { toBlob } from "html-to-image";
import toast from "react-hot-toast";
import useStore from "@/store";

const ExportOptions = ({ targetRef }) => {
  const copyImage = async () => {
    const imgBlob = toBlob(targetRef.current, {
      pixelRatio: 2,
    });
    const img = new ClipboardItem({ "image/png": imgBlob });
    navigator.clipboard.write([img]);
  };

  const copyLink = ()=> {
    const state = useStore.getState();
    const queryParams = new URLSearchParams({
        ...state,
        code: btoa(state.code)
    }).toString()
    
    navigator.clipboard.writeText(`${location.href}?${queryParams}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Share2Icon className="mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark">
        <DropdownMenuItem className="gap-2" onClick={()=> toast.promise(copyImage(), {
            loading: "Copying...",
            success: "Image copied to clipboard!",
            error: 'Something went wrong!',
        })}>
          <ImageIcon />
          Copy Image
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={()=> {
            copyLink();
            toast.success("Link copied to clipboard!")
        }}>
          <Link2Icon />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <DownloadIcon />
          Save as PNG
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <DownloadIcon />
          Save as SVG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportOptions;
