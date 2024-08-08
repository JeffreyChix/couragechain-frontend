"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import FileTypeIcon, { IMAGE_TYPES } from "./file-type-icons";
import Loading from "@/components/loading";
import { shorten } from "@/utils/string";
import RenderDialog from "@/components/render-dialog";

const SUPPORTED_OFFICE_EXTENSIONS = [
  "xls",
  "xlsx",
  "doc",
  "docx",
  "ppt",
  "pptx",
  "txt",
];

interface FilePreviewProps {
  attachment: FetchedAttachment;
  onActive?: (val: FetchedAttachment) => void;
}

export default function FilePreview({ attachment }: FilePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="flex items-center px-3 py-3 gap-2 cursor-pointer transition-all duration-200 ease-in hover:scale-105 hover:from-white/90 hover:to-white/70 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5"
      >
        <FileTypeIcon
          className="shrink-0 h-15 w-15"
          type={attachment.filename.split(".").pop()}
        />
        <p>{shorten(attachment.filename, 40)}</p>
      </button>
      <RenderDialog
        open={open}
        onOpenChange={() => setOpen(false)}
        isFullScreen
        configure={{
          fullScreen: { title: shorten(attachment.filename, 100) },
        }}
      >
        <Preview attachment={attachment} />
      </RenderDialog>
    </>
  );
}

const Preview = ({ attachment }: { attachment: FetchedAttachment | null }) => {
  const [loading, setLoading] = useState(true);

  if (!attachment) return null;

  const { filename, mimetype, buffer } = attachment;
  const extension = filename.split(".").pop();
  const href = `data:${mimetype};base64,${buffer}`;

  const getPreviewLink = () => {
    return SUPPORTED_OFFICE_EXTENSIONS.includes(extension as string)
      ? `https://view.officeapps.live.com/op/embed.aspx?src=${href}`
      : href;
  };

  return (
    <div className="w-full h-full max-h-[80vh]">
      <div className="grid place-items-center p-4 h-full">
        <div className="h-full w-full flex flex-col items-center justify-center ">
          <Link
            href={getPreviewLink()}
            target="_blank"
            className="text-indigo-400 block my-2"
          >
            Open in a new tab
          </Link>
          {IMAGE_TYPES.includes(extension as string) ? (
            <ImagePreview source={href} name={filename} />
          ) : (
            <>
              <Loading loading={loading} loadingMessage="Loading file..." />
              <iframe
                src={getPreviewLink()}
                width="100%"
                height="100%"
                onLoad={() => setLoading(false)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ImagePreview = ({ source, name }: { source: string; name: string }) => {
  return (
    <div className="relative h-[480px]">
      <Image
        src={source}
        alt={name}
        height={480}
        width={500}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
