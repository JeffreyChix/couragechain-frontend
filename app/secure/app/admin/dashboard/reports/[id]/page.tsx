import type { Metadata } from "next";
import { MapPin, CalendarCheck2, CalendarClock, Paperclip } from "lucide-react";

import { REPORT_SERVICE } from "@/services/report";
import ReportInfo from "./info";
import HTMLViewer from "@/components/html-viewer";
import Divider from "@/components/divider";
import Attachments from "./attachments";
import { EMPTY_FIELD } from "@/utils/misc";
import { getDateInTimeZone } from "@/utils/date";
import Update from "./update";
import { shorten } from "@/utils/string";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const report = await REPORT_SERVICE.GET_REPORT(params.id);

  return {
    title: `${report.subject} - Echo`,
    description: shorten(report.description, 80),
  };
}

export default async function Report({
  params: { id },
}: {
  params: { id: string };
}) {
  const report = await REPORT_SERVICE.GET_REPORT(id);

  const {
    location,
    description,
    date_of_incident,
    date_of_submission,
    attachments,
    subject,
    secretKey,
  } = report;

  const info = [
    {
      title: "Location",
      icon: <MapPin className="h-5 w-5" />,
      desc: !location || location === EMPTY_FIELD ? "Unavailable" : location,
    },
    {
      title: "Date submitted",
      icon: <CalendarCheck2 className="h-5 w-5" />,
      desc: getDateInTimeZone(date_of_submission),
    },
    {
      title: "Date of incident",
      icon: <CalendarClock className="h-5 w-5" />,
      desc: getDateInTimeZone(date_of_incident),
    },
    {
      title: "Attachments",
      icon: <Paperclip className="h-5 w-5" />,
      desc: `${attachments.length} attachment(s)`,
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:max-w-96 top-0 left-0 p-4">
          <div className="relative flex min-w-40 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg shadow">
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            <div className="px-4 py-4 flex flex-col gap-y-2">
              {info.map((i, index) => (
                <ReportInfo
                  desc={i.desc}
                  title={i.title}
                  icon={i.icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:ml-20 w-full">
          <div className="space-y-4">
            <h1 className="mb-5 text-xl lg:text-2xl">{subject}</h1>
            <HTMLViewer auto html={description} />

            {attachments.length !== 0 && (
              <div>
                <Divider>Attachments</Divider>
                <Attachments attachments={attachments} />
              </div>
            )}

            <Divider>Add Update</Divider>

            <Update id={secretKey} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const ids = await REPORT_SERVICE.GET_ALL_REPORT_KEYS();

  return ids.map((id) => ({
    id,
  }));
}
