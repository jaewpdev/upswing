import Link from "next/link";

export default function Button({
  variant = "primary",
  href,
  onClick,
  className,
  children,
}: {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = {
    primary:
      "border-brand-green bg-brand-green hover:bg-white focus:bg-white text-white hover:text-brand-black focus:text-brand-black",
    secondary: "border-brand-black bg-brand-black hover:bg-white focus:bg-white text-white hover:text-brand-black focus:text-brand-black",
    outline: "border-brand-black font-brand-black font-semibold hover:bg-brand-black hover:text-white focus:bg-brand-black focus:text-white",
    shared: "border-2 duration-300 transition-all px-8 py-4 rounded-[32px]",
    medium: "font-medium text-sm rounded-3xl px-4 py-2",
    large: "w-full md:w-auto text-lg px-8 py-4 rounded-[32px] font-semibold",
  };

  return href ? (
    <Link
      className={`${className} ${classes[variant]} ${classes.shared}`}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={`${className} ${classes[variant]} ${classes.shared}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
