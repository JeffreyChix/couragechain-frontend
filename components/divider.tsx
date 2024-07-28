export default function Divider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 my-6 ${className}`}>
      <div className="flex-1 border-b border-gray-300" />
      <div className="flex-shrink-0 font-semibold text-base text-dark-gray">
        {children}
      </div>
      <div className="flex-1 border-b border-gray-300" />
    </div>
  );
}
