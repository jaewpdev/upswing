import ArrowUpSVG from "../../public/images/arrow-up.svg";
import ArrowDownSVG from "../../public/images/arrow-down.svg";

export default function ArrowButton({
  color = "black",
  direction = "down",
  size = "md",
  onClick,
}: {
  color?: "black" | "white";
  direction?: "up" | "down";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}) {
  const sizeClasses = {
    sm: "w-8",
    md: "w-24",
    lg: "w-32",
  };

  const renderedArrow =
    direction === "down" ? (
      <ArrowDownSVG className={`${color}-arrow ${sizeClasses[size]}`} />
    ) : (
      <ArrowUpSVG className={`${color}-arrow ${sizeClasses[size]}`} />
    );

  return onClick ? (
    <button onClick={onClick} type="button">
      {renderedArrow}
    </button>
  ) : (
    renderedArrow
  );
}
