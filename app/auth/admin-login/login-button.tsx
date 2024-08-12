"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { BsInfoCircle } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

import Button from "@/components/ui/form/button";
import RenderDialog from "@/components/render-dialog";
import { OAUTH_NOTICE } from "@/utils/misc";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();

  const callbackUrl =
    searchParams.get("callbackUrl") || "/secure/app/admin/dashboard";

  useEffect(() => {
    const notice = sessionStorage.getItem(OAUTH_NOTICE);
    if (!notice) {
      setIsOpen(true);
      return;
    }
    setIsOpen(JSON.parse(notice) === true);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage?.setItem(OAUTH_NOTICE, "false");
  };

  return (
    <div className="grid place-items-center px-4 py-10 gap-4 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5">
      <div className="flex items-center gap-2">
        <BsInfoCircle />
        <span>Click to demo the app! 😃</span>
      </div>
      <Button
        loading={isLoading}
        onClick={() => {
          signIn("github", { callbackUrl });
          setIsLoading(true);
        }}
        className="flex items-center gap-2"
      >
        <IoLogoGithub />
        <span>Login with GitHub</span>
        <span className="sr-only">Login</span>
      </Button>

      <RenderDialog
        open={isOpen}
        onOpenChange={close}
        header={{ title: "Temporary Demo Login: GitHub OAuth" }}
      >
        <div>
          <p className="mb-4">
            To demo the dapp, I've implemented a basic OAuth login using GitHub.
            In the future, I plan to develop a more robust authentication system
            for authorities to securely log in and manage reports. For now,
            simply log in with GitHub to try out the demo. 👩‍💻 (No, authorities
            will not be logging in with a wallet!)
          </p>
          <Button onClick={close}>I acknowledge</Button>
        </div>
      </RenderDialog>
    </div>
  );
}
