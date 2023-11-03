import { navItems } from "../static/navItems";
import Button from "./Button";

export default function MobileNavigationSlider({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed bottom-0 h-mobile-nav w-screen bg-white z-50 duration-100 p-4 flex flex-col ${
        isOpen ? "left-0" : "left-full"
      }`}
    >
      <nav className="bg-brand-gray rounded-[32px] w-full flex flex-col gap-2 p-4 mb-4 flex-auto">
        {navItems.map(({ text, href }) => (
          <a
            href={href}
            key={href}
            className="text-2xl py-2 px-4 -mx-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {text}
          </a>
        ))}
      </nav>
      <div className="bg-brand-black rounded-[32px] w-full p-8 flex flex-col items-center">
        <p className="mb-6 text-2xl text-white">What&apos;s stopping you?</p>
        <Button onClick={() => setIsOpen(!isOpen)}>Get Started</Button>
      </div>
    </div>
  );
}
