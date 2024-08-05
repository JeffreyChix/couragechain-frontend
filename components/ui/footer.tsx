import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-8">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              © Echo - Report Anonymously. <br />
              <Link
                href={"/secure/app/public/new-report"}
                className="font-medium text-indigo-500 hover:underline"
              >
                Make a Report
              </Link>{" "}
              /{" "}
              <Link
                href={"/secure/app/public/track-report"}
                className="font-medium text-indigo-500 hover:underline"
              >
                Track a Report
              </Link>{" "}
              /{" "}
              <Link
                href={"/"}
                className="font-medium text-indigo-500 hover:underline"
              >
                Admin Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
