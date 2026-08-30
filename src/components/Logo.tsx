export default function Logo({
  size = "base",
  onLight = false,
  className = "",
}: {
  size?: "sm" | "base" | "lg";
  onLight?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "text-base",
    base: "text-lg",
    lg: "text-2xl",
  };

  return (
    <span
      className={`font-display font-medium tracking-tight whitespace-nowrap ${sizes[size]} ${
        onLight ? "text-zinc-900" : "text-white"
      } ${className}`}
    >
      Book
      <em className={`italic font-normal ${onLight ? "text-primary-dark" : "text-primary-light"}`}>
        My
      </em>
      Moment
      <span className="text-accent font-semibold text-[0.6em] align-super ml-0.5">.IN</span>
    </span>
  );
}
