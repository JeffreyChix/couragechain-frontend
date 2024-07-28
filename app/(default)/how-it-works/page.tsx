{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/waitlist-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import { STEPS } from "@/lib/steps";

export const metadata = {
  title: "How it works - Echo",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import Steps from "@/app/(default)/how-it-works/steps";

export default function HowItWorks() {
  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="How Echo Works"
              description="With Echo, you can report incidents safely and track their progress anonymously. Your voice matters, and Echo ensures it’s heard without compromising your privacy."
            >
              It's on the blockchain
            </PageHeader>
          </div>
        </div>
      </section>

      <Steps steps={STEPS} />
      <Cta />
    </>
  );
}
