export const metadata = {
  title: "FAQ - Echo",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";
import { FAQS } from "@/lib/faqs";

export default function Faq() {
  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Echo Insights"
              description="With Echo, your screams are heard and addressed without anyone knowing who screamed. Rest assured, your safety and anonymity are our top priorities."
            >
              Trust in Blockchain, Trust in Justice
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {FAQS.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq?.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta title="Blockchain: Your Ally in Fighting Crime" />
    </>
  );
}
