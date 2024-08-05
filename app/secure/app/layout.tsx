import { SWRProvider } from "@/components/provider/swr-provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <SWRProvider>{children}</SWRProvider>;
}
