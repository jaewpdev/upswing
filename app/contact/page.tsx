"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Contact({
  params,
}: {
  params: {
    slug: "personal-info" | "business-info" | "business-marketing-info";
  };
}) {
  const { slug } = params;

  useEffect(() => {
    if (
      slug !== "personal-info" &&
      slug !== "business-info" &&
      slug !== "business-marketing-info"
    ) {
      redirect("/contact/personal-info");
    }
  }, [slug]);

  return;
}
