import { usePathname, useRouter } from "next/navigation";
import { animate } from "framer-motion";

export default function useSmoothNavigate() {
  const pathname = usePathname();
  const { push } = useRouter();
  const isLandingPage = pathname === "/";

  function getOffsetTop(element: HTMLElement): number {
    let offset = element.offsetTop;
    let parent = element.offsetParent as HTMLElement | null; // refined type here

    while (parent) {
      offset += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement | null; // and here
    }

    return offset;
  }

  function handleSmoothScroll(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void {
    e.preventDefault();

    if (isLandingPage) {
      // If we're already on the landing page, just scroll to the section
      const targetElement = document.querySelector(href) as HTMLElement | null;
      if (!targetElement) return;

      const targetY = getOffsetTop(targetElement);

      animate(window.scrollY, targetY, {
        type: "tween",
        ease: [0.77, -0.02, 0.4, 0.87],
        duration: 0.8,
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        },
      });
    } else {
      push("/" + href);
    }
  }

  return handleSmoothScroll;
}
