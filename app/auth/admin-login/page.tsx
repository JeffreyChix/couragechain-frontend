export const metadata = {
  title: "Admin Logo - Echo",
  description: "Log In to Demo the Echo Dashboard",
};

import { Suspense } from "react";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import LoginButton from "./login-button";
import Loading from "@/components/loading";
import { redirect } from "next/navigation";

export default async function AdminLogin() {
  const session = await auth();

  if (session) {
    redirect("/secure/app/admin/dashboard");
  }

  return (
    <div>
      <Suspense
        fallback={<Loading loading loadingMessage="Just a second..." />}
      >
        <LoginButton />
      </Suspense>
    </div>
  );
}
