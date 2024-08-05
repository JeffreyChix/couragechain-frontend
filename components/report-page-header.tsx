import bannerImage from "@/public/images/report-form-banner.gif";
import GradientBox from "./gradient-box";
import StellarLogo from "./stellar-logo";

export default function ReportPageHeader() {
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
          <h1 className="text-2xl font-semibold mb-3">
            Submit An Anonymous Report
          </h1>

          <div className="flex flex-col gap-y-3 mb-2">
            <p>
              Please provide a detailed description of the incident and upload
              any supporting evidence, such as documents, images, audios, or
              videos. Your information will greatly assist the authorities.
            </p>
            <p>
              On Echo, you can report any type of crime or incident, including
              but not limited to murder, sexual assault, rape, harassment,
              theft, and domestic violence. If you're too scared to seek help
              directly, you can make a report here anonymously.
            </p>
            <p>
              Your voice is heard and addressed without revealing your identity.
              We don't even know who is making the report. By using our secure
              and anonymous reporting system, your concerns are taken seriously
              and handled with the utmost confidentiality.
            </p>
            <hr />
          </div>

          <div className="flex flex-col items-center justify-center">
            <StellarLogo />
            <p className="text-sm text-center text-gray-500">
              Your report and attachments are securely <br />
              encrypted and stored on the blockchain.
            </p>
          </div>
        </div>
      </GradientBox>
    </div>
  );
}
