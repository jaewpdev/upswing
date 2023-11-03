import Link from "next/link";
import LogoSVG from "../../public/images/logo.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`${className}  flex items-center gap-2`}>
      <LogoSVG className="w-10  lg:w-16" />
      <span className="text-2xl  lg:text-3xl font-semibold leading-tight tracking-tight">
        Upswing
      </span>
    </Link>
  );
}
