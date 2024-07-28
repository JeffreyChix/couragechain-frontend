export default function InputContainer({
  title,
  children,
  desc,
  active,
  isRequired,
}: {
  title: string;
  children: React.ReactNode;
  desc?: string;
  active?: boolean;
  isRequired?: boolean;
}) {
  return (
    <div
      className={`relative px-4 py-4 group inset-y-0 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5 my-6 ${
        active && "border-l-8 border-indigo-400"
      }`}
    >
      <header className="mb-3">
        <h2 className="font-inter-tight text-lg leading-6 font-semibold text-gray-800 dark:text-gray-200">
          {title}
          {isRequired && (
            <span
              className="text-red-700 pl-1"
              aria-label="Required field"
            >
              *
            </span>
          )}
        </h2>
      </header>
      <div className="mb-4">
        {desc && (
          <p className="text-gray-600 dark:text-gray-500 mb-3">{desc}</p>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
