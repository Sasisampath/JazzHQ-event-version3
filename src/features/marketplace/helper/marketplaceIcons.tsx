"use client";

import { useId, type SVGProps } from "react";
import {
  howItWorksHeaderIconSvgPaths,
  howItWorksStepApplyIconConfig,
  howItWorksStepApprovedIconConfig,
  howItWorksStepCloseDealsIconConfig,
  howItWorksStepEarnCommissionIconConfig,
  howItWorksStepIndicatorRingPath,
  howItWorksStepRegisterLeadsIconConfig,
  howItWorksStepTrainingIconConfig,
  type HowItWorksStepIconConfig,
  type MarketplaceIconPath,
  vendorListingsHeroBadgeSparkleIconSvgPaths,
  vendorListingsHeroFlowDownArrowSvgPath,
  vendorListingsHeroFlowHandshakeSvgPaths,
  vendorListingsHeroFlowPersonSvgPath,
  vendorListingsHeroFlowReceiptSvgPaths,
  vendorListingsHeroFlowUpArrowSvgPath,
  vendorListingsHeroHandshakeIconSvgPaths,
  vendorListingsHeroSearchIconSvgPaths,
  marketplaceArrowLeftSvgPaths,
  vendorListingsHeroUsersIconSvgPaths,
  vendorListingsHeroGlobeIconSvgPaths,
  vendorListingsHeroStarOutlineIconSvgPaths,
  vendorListingsHeroStarFilledIconSvgPaths,
} from "./marketplaceIconPaths";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

function renderIconPaths(paths: MarketplaceIconPath[]) {
  return paths.map((path, index) => (
    <path
      key={index}
      d={path.d}
      fill={path.fill}
      stroke={path.stroke}
      strokeWidth={path.strokeWidth}
      strokeLinecap={path.strokeLinecap}
      strokeLinejoin={path.strokeLinejoin}
      fillRule={path.fillRule}
      clipRule={path.clipRule}
      opacity={path.opacity}
    />
  ));
}

function HowItWorksStepIndicatorIcon({
  config,
  size = 48,
  className = "",
  ...props
}: IconProps & { config: HowItWorksStepIconConfig }) {
  const filterId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <filter
          id={filterId}
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0156863 0 0 0 0 0.0784314 0 0 0 0 0.486275 0 0 0 0.15 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`}>
        <circle cx="24" cy="22" r="20" fill="white" />
        <path d={howItWorksStepIndicatorRingPath} fill="white" />
        {renderIconPaths(config.iconPaths)}
        <path d={howItWorksStepIndicatorRingPath} fill={config.accentFill} />
      </g>
    </svg>
  );
}

export function HowItWorksHeaderIcon({
  size = 34,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28.9541 33.9698"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {renderIconPaths(howItWorksHeaderIconSvgPaths)}
    </svg>
  );
}

export function HowItWorksStepApplyIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepApplyIconConfig} {...props} />;
}

export function HowItWorksStepApprovedIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepApprovedIconConfig} {...props} />;
}

export function HowItWorksStepTrainingIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepTrainingIconConfig} {...props} />;
}

export function HowItWorksStepRegisterLeadsIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepRegisterLeadsIconConfig} {...props} />;
}

export function HowItWorksStepCloseDealsIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepCloseDealsIconConfig} {...props} />;
}

export function HowItWorksStepEarnCommissionIcon(props: IconProps) {
  return <HowItWorksStepIndicatorIcon config={howItWorksStepEarnCommissionIconConfig} {...props} />;
}

export function VendorListingsHeroBadgeSparkleIcon({
  size = 16,
  className = "",
  ...props
}: IconProps) {
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
      {renderIconPaths(vendorListingsHeroBadgeSparkleIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroSearchIcon({
  size = 20,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {renderIconPaths(vendorListingsHeroSearchIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroHandshakeIcon({
  size = 40,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {renderIconPaths(vendorListingsHeroHandshakeIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroFlowGraphicIcon({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="132"
      height="169"
      viewBox="0 0 132 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* up arrow (Person to Handshake) */}
      <g transform="translate(20, 16) translate(39.5, 25.5) scale(0.8) translate(-39.5, -25.5)">
        {renderIconPaths(vendorListingsHeroFlowUpArrowSvgPath)}
      </g>

      {/* down arrow (Handshake to Receipt) */}
      <g transform="translate(32, 92) translate(36.5, 26.5) scale(0.8) translate(-36.5, -26.5)">
        {renderIconPaths(vendorListingsHeroFlowDownArrowSvgPath)}
      </g>

      {/* Handshake */}
      <g transform="translate(0, 58)">
        {renderIconPaths(vendorListingsHeroFlowHandshakeSvgPaths)}
      </g>

      {/* Magnify Glass (Person) */}
      <g transform="translate(92, 0)">
        {renderIconPaths(vendorListingsHeroFlowPersonSvgPath)}
      </g>

      {/* Bill List (Receipt) */}
      <g transform="translate(92, 129)">
        {renderIconPaths(vendorListingsHeroFlowReceiptSvgPaths)}
      </g>
    </svg>
  );
}

export function MarketplaceArrowLeftIcon({
  size = 16,
  className = "",
  ...props
}: IconProps) {
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
      {renderIconPaths(marketplaceArrowLeftSvgPaths)}
    </svg>
  );
}

export function MarketplaceArrowRightIcon({
  className = "",
  ...props
}: IconProps) {
  return <MarketplaceArrowLeftIcon className={`rotate-180 ${className}`} {...props} />;
}

export function VendorListingsHeroUsersIcon({ size = 26, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      {renderIconPaths(vendorListingsHeroUsersIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroGlobeIcon({ size = 26, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      {renderIconPaths(vendorListingsHeroGlobeIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroStarOutlineIcon({ size = 26, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      {renderIconPaths(vendorListingsHeroStarOutlineIconSvgPaths)}
    </svg>
  );
}

export function VendorListingsHeroStarFilledIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      {renderIconPaths(vendorListingsHeroStarFilledIconSvgPaths)}
    </svg>
  );
}

