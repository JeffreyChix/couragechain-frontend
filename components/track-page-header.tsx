import bannerImage from "@/public/images/report-form-banner.png";
import GradientBox from "./gradient-box";
import SecretKeyForm from "@/app/secure/app/public/(default)/track-report/form";

export default function TrackPageHeader({
  onSubmitKey,
}: {
  onSubmitKey: (val: string) => void;
}) {
  return (
    <div>
      <div className="mb-6">
        <div
          className="report-header-bg max-h-[22.5vw] max-w-full h-48 mx-auto bg-cover bg-center border rounded-lg"
          style={{ backgroundImage: `url(${bannerImage.src})` }}
        />
      </div>

      <GradientBox>
        <div className="px-4 py-4">
          <SecretKeyForm onSubmitKey={onSubmitKey} />
        </div>
      </GradientBox>
    </div>
  );
}
