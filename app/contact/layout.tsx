"use client";

import FullScreenLoader from "@/src/components/FullScreenLoader";
import { useContactContext } from "@/src/context/contactContext";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useContactContext();

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div className="container mx-auto">
        <div className="gray-rounded-section">
          <h2 className="mb-10">We&apos;re super stoked to hear from you!</h2>
          {children}
        </div>
      </div>
    </>
  );
}
