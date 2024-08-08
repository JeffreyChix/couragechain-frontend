"use client";

import { useRouter } from "next/navigation";

import GradientBox from "@/components/gradient-box";
import Button from "@/components/ui/form/button";
import Logo from "@/components/ui/logo";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="w-full max-w-3xl mx-auto grid place-items-center">
      <GradientBox>
        <div className="grid place-items-center gap-y-5 p-5">
          <Logo isLink={false} />
          <h1 className="text-center">
            Welcome to the Echo Dashboard, where blockchain technology drives
            positive change! This screen is currently under development. Click
            the button to review some reports and see the impact we're making!
          </h1>
          <Button
            onClick={() => router.push("/secure/app/admin/dashboard/reports")}
          >
            See Reports
          </Button>
        </div>
      </GradientBox>
    </div>
  );
}
