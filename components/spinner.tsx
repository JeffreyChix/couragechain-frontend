export default function Spinner({
  size = 20,
  color = "#818cf8",
}: {
  size?: number;
  color?: string;
}) {
  const lines = Array(8).fill(null);
  const eachLineAngle = 360 / lines.length;

  return (
    <div
      className="spinner"
      style={
        {
          "--size": `${size}px`,
          "--color": color,
        } as any
      }
    >
      {lines.map((_, i) => {
        return (
          <div
            key={i}
            style={{
              transform: `rotate(${i * eachLineAngle}deg)`,
              animationDelay: `${
                ((i - lines.length - 1) * 0.8) / lines.length
              }s`,
            }}
          />
        );
      })}
    </div>
  );
}
