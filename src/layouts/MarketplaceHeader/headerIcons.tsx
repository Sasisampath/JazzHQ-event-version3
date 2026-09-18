import type { SVGProps } from "react";
import Image from "next/image";
import {
  headerSearchIconSvgPath,
  jazzHqLogoIconPaths,
  marketplaceMonogramImageSrc,
} from "@/layouts/MarketplaceHeader/headerIconPaths";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

type LogoProps = IconProps & {
  width?: number;
  height?: number;
};

export function JazzHqLogoIcon({
  width = 144,
  height = 24,
  className = "",
  ...props
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 144 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {jazzHqLogoIconPaths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill={path.fill}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          strokeMiterlimit={path.stroke ? 10 : undefined}
        />
      ))}
    </svg>
  );
}

export function MarketplaceMonogramIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={marketplaceMonogramImageSrc}
      alt="JazzHQ monogram"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function HeaderSearchIcon({
  size = 16,
  className = "",
  strokeColor = "currentColor",
  ...props
}: IconProps & { strokeColor?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d={headerSearchIconSvgPath}
        stroke={strokeColor}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}
