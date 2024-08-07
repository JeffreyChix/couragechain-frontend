export default function ReportInfo({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <p className="text-indigo-400">{desc}</p>
      <span className="flex items-center gap-2 text-xs">
        <label>{title}</label>
      </span>
    </div>
  );
}
