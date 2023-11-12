import ArrowUpSVG from "../../public/images/arrow-up.svg";
import ArrowDownSVG from "../../public/images/arrow-down.svg";
import ArrowLeftSVG from "../../public/images/arrow-left.svg";
import ArrowRightSVG from "../../public/images/arrow-right.svg";

export default function ArrowButton({
  color = "black",
  direction = "down",
  size = "md",
  onClick,
  className,
}: {
  color?: "black" | "white";
  direction?: "up" | "down" | "right" | "left";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-8",
    md: "w-24",
    lg: "w-32",
  };

  const renderedArrow = {
    down: (
      <ArrowDownSVG
        className={`${color}-arrow ${sizeClasses[size]} ${className}`}
      />
    ),
    left: (
      <ArrowLeftSVG
        className={`${color}-arrow ${sizeClasses[size]} ${className}`}
      />
    ),
    up: (
      <ArrowUpSVG
        className={`${color}-arrow ${sizeClasses[size]} ${className}`}
      />
    ),
    right: (
      <ArrowRightSVG
        className={`${color}-arrow ${sizeClasses[size]} ${className}`}
      />
    ),
  };


  return onClick ? (
    <button onClick={onClick} type="button">
      {renderedArrow[direction]}
    </button>
  ) : (
    renderedArrow[direction]
  );
}
