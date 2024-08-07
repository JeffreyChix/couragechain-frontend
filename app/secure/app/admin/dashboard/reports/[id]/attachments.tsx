import FilePreview from "@/components/file-preview";

export default function Attachments({
  attachments,
}: {
  attachments: FetchedAttachment[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative">
      {attachments.map((attachment, index) => (
        <FilePreview
          key={index}
          attachment={attachment}
        />
      ))}
    </div>
  );
}
