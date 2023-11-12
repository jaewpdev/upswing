import { navItems } from "../static/navItems";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="footer" className="my-10">
      <div className="container mx-auto">
        <div className="bg-brand-black rounded-[32px] p-8">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center pb-20 border-b border-white mb-20">
            <h2 className="text-white text-center sm:text-left">Whenever You&apos;re Ready, We are.</h2>
            <Button href="/contact">Contact Us</Button>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <Logo className="text-white mb-10" />
              <p className="text-gray-400 max-w-[15ch] mb-20">
                Accelerate Your Client Growth
              </p>
              <a ><p className="text-white">jae@useupswing.com</p></a>
            </div>

            <ul className="flex flex-col gap-4 mx-auto">
                {navItems.map(({text, href}) => <a href={href} key={href}><p className="text-white">{text}</p></a>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
