import Loading from "@/components/loading";
import UpdatesList from "./updates-list";
import EmptyRecords from "@/components/empty-records";

export default function Updates({
  loading,
  updates = [],
}: {
  loading?: boolean;
  updates?: ReportUpdate[];
}) {
  return (
    <section className="my-10">
      <Loading loading={loading} size={35} loadingMessage="Decrypting updates...">
        {updates.length === 0 ? (
          <EmptyRecords />
        ) : (
          <UpdatesList updates={updates} />
        )}
      </Loading>
    </section>
  );
}
