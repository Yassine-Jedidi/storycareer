"use client";
import React from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter, OurFileRouter } from "@/app/api/uploadthing/core";
import { toast } from "sonner";

interface Props {
  onChange: (url: string) => void;
  endPoint: keyof typeof ourFileRouter;
}
const FileUploader = ({ endPoint, onChange }: Props) => {
  return (
    <UploadDropzone
      className="w-full bg-white"
      endpoint={endPoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(error: Error) => {
        toast(`${error.message}`, {
          className: "bg-rose-500 text-white",
        });
      }}
    ></UploadDropzone>
  );
};

export default FileUploader;
