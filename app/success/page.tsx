import Button from "@/src/components/Button";
import SuccessSVG from "../../public/images/contact-success.svg";

export default function ContactSuccess() {
  return (
    <div className="min-h-[500px] container mx-auto flex flex-col items-center py-16">
      <h1 className="mb-6">We got it!</h1>
      <p className="max-w-[55ch] text-center">
        Your form has been successfully submited. We will reach out in the very
        near future. We&apos;re just as excited as you are to propel your business
        toward greater success. Talk to you soon!
      </p>
      <SuccessSVG className="mt-8 mb-10" />

      <Button href="/">Go back to home</Button>
    </div>
  );
}
