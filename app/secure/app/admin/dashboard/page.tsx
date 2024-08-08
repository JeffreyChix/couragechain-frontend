import Link from "next/link";

import GradientBox from "@/components/gradient-box";
import Logo from "@/components/ui/logo";
import { auth } from "@/app/api/auth/[...nextauth]/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="w-full max-w-3xl mx-auto grid place-items-center">
      <GradientBox>
        <div className="flex flex-col gap-5 p-5">
          <Logo isLink={false} />
          <div>
            <h2 className="font-inter-tight text-xl my-3">
              Hello{" "}
              <span className="italic text-indigo-400">
                {session?.user?.name}
              </span>
              ,
            </h2>
            <p>
              Welcome to the Echo Dashboard, where blockchain technology drives
              positive change! This screen is currently under development. Click
              the button to review some reports and see the impact we're making!
            </p>
          </div>
          <Link
            href="/secure/app/admin/dashboard/reports"
            className="btn text-gray-100 text-2xl bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white"
          >
            See Reports
          </Link>
        </div>
      </GradientBox>
    </div>
  );
}
