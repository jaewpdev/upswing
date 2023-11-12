import { useRouter } from "next/navigation";
import useSmoothNavigate from "../hooks/useSmoothNavigate";
import { navItems } from "../static/navItems";
import Button from "./Button";

export default function MobileNavigationSlider({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSmoothScroll = useSmoothNavigate();
  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    setIsOpen(!isOpen);
    handleSmoothScroll(e, href);
  };

  const {push} = useRouter();

  return (
    <div
      className={`fixed bottom-0 h-screen w-screen bg-white z-50 duration-100 p-4 flex flex-col pt-[72px] ${
        isOpen ? "left-0" : "left-full"
      }`}
    >
      <nav className="bg-brand-gray rounded-[32px] w-full flex flex-col gap-2 p-4 mb-4 flex-auto">
        {navItems.map(({ text, href }) => (
          <a
            href={href}
            key={href}
            className="text-2xl py-2 px-4 -mx-4"
            onClick={(e) => handleOnClick(e, href)}
          > 
            {text}
          </a>
        ))}
      </nav>
      <div className="bg-brand-black rounded-[32px] w-full p-8 flex flex-col items-center">
        <p className="mb-6 text-2xl text-white">What&apos;s stopping you?</p>
        <Button 
          onClick={() => {
            setIsOpen(!isOpen);
            push('/contact');
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
