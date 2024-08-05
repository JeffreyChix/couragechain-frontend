import Spinner from "./spinner";

interface LoadingProps {
  loading?: boolean;
  children?: React.ReactNode;
  loadingMessage?: string;
  size?: number;
}

export default function Loading({
  loading,
  loadingMessage,
  children,
  size,
}: LoadingProps) {
  if (!loading) return children;

  return (
    <div className="grid place-items-center">
      <Spinner size={size} />
      {loadingMessage && <p className="mt-3 text-lg">{loadingMessage}</p>}
    </div>
  );
}
