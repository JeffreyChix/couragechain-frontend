"use client";

import StepsList from "./StepsList";

export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex md:justify-between">
              <StepsList steps={steps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
