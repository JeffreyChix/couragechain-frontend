import { GiEmptyMetalBucketHandle } from "react-icons/gi";

export default function EmptyRecords({
  message = "No records found!",
}: {
  message?: string;
}) {
  return (
    <div className="text-center py-5 text-light-gray">
      <div className="text-5xl mb-3">
        <GiEmptyMetalBucketHandle className="inline-block" />
      </div>
      <div className="text-base">{message}</div>
    </div>
  );
}
