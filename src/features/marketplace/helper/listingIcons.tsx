import type { SVGProps } from "react";
import {
  vendorDetailPreviewCustomerUseCasesIconSvgPath1,
  vendorDetailPreviewCustomerUseCasesIconSvgPath2,
  vendorDetailPreviewCustomerUseCasesIconSvgPath3,
  vendorDetailPreviewGeographiesIconSvgPath1,
  vendorDetailPreviewGeographiesIconSvgPath2,
  vendorDetailPreviewGeographiesIconSvgPath3,
  vendorDetailPreviewGeographiesIconSvgPath4,
  vendorDetailPreviewGeographiesServedIconSvgPath1,
  vendorDetailPreviewGeographiesServedIconSvgPath2,
  vendorDetailPreviewGeographiesServedIconSvgPath3,
  vendorDetailPreviewGeographiesServedIconSvgPath4,
  vendorDetailPreviewGeographiesServedIconSvgPath5,
  vendorDetailPreviewGeographiesServedIconSvgPath6,
  vendorDetailPreviewIcpIconSvgPath1,
  vendorDetailPreviewIcpIconSvgPath2,
  vendorDetailPreviewIppIconSvgPath1,
  vendorDetailPreviewIppIconSvgPath2,
  vendorDetailPreviewIppIconSvgPath3,
  vendorDetailPreviewIppIconSvgPath4,
  vendorDetailPreviewIppIconSvgPath5,
  vendorDetailPreviewIppIconSvgPath6,
  vendorDetailPreviewIppIconSvgPath7,
  vendorDetailPreviewProductDemoIconSvgPath1,
  vendorDetailPreviewProductDemoIconSvgPath2,
  vendorDetailPreviewProductDemoIconSvgPath3,
  vendorDetailPreviewProductDemoIconSvgPath4,
  vendorDetailPreviewProductOverviewIconSvgPath1,
  vendorDetailPreviewProductOverviewIconSvgPath2,
  vendorDetailPreviewTestimonialIconSvgPath1,
  vendorDetailPreviewTestimonialIconSvgPath2,
  vendorDetailPreviewTestimonialIconSvgPath3,
  vendorDetailPreviewTestimonialIconSvgPath4,
  vendorDetailPreviewTestimonialQuoteIconSvgPath,
  vendorDetailPreviewUseCasesIconSvgPath1,
  vendorDetailPreviewUseCasesIconSvgPath2,
  vendorDetailPreviewUseCasesIconSvgPath3,
  vendorDetailPreviewUseCasesIconSvgPath4,
  vendorDetailPreviewUseCasesIconSvgPath5,
  vendorDetailPreviewUseCasesIconSvgPath6,
  vendorDetailPreviewUseCasesIconSvgPath7,
} from "./iconPaths";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
  fillColor?: string;
};

export const vendorDetailPreviewIcpIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d={vendorDetailPreviewIcpIconSvgPath1} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewIcpIconSvgPath2} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

export const vendorDetailPreviewGeographiesServedIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <path
        key={i}
        d={
          [
            vendorDetailPreviewGeographiesServedIconSvgPath1,
            vendorDetailPreviewGeographiesServedIconSvgPath2,
            vendorDetailPreviewGeographiesServedIconSvgPath3,
            vendorDetailPreviewGeographiesServedIconSvgPath4,
            vendorDetailPreviewGeographiesServedIconSvgPath5,
            vendorDetailPreviewGeographiesServedIconSvgPath6,
          ][i - 1]
        }
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    ))}
  </svg>
);

export const vendorDetailPreviewGeographiesIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewGeographiesIconSvgPath1} fill="#F7CF66" fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewGeographiesIconSvgPath2} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewGeographiesIconSvgPath3} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewGeographiesIconSvgPath4} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

export const vendorDetailPreviewProductDemoIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  showPlayButton = true,
  ...props
}: IconProps & { showPlayButton?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewProductDemoIconSvgPath1} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewProductDemoIconSvgPath2} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
    {showPlayButton ? (
      <path d={vendorDetailPreviewProductDemoIconSvgPath3} fill="#E5484D" fillRule="evenodd" clipRule="evenodd" />
    ) : null}
    <path d={vendorDetailPreviewProductDemoIconSvgPath4} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

export const vendorDetailPreviewTestimonialQuoteIcon = ({
  width = 28,
  height = 24,
  className = "",
  fillColor = "#0842A0",
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string }) => (
  <svg width={width} height={height} viewBox="0 0 28 24" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewTestimonialQuoteIconSvgPath} fill={fillColor} />
  </svg>
);

export const vendorDetailPreviewTestimonialIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewTestimonialIconSvgPath1} fill={fillColor} />
    <path d={vendorDetailPreviewTestimonialIconSvgPath2} fill={fillColor} />
    <path d={vendorDetailPreviewTestimonialIconSvgPath3} fill={fillColor} />
    <path d={vendorDetailPreviewTestimonialIconSvgPath4} fill={fillColor} />
  </svg>
);

export const vendorDetailPreviewIppIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={Math.round((size * 30) / 32)}
    viewBox="0 0 32 30"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path
        key={i}
        d={
          [
            vendorDetailPreviewIppIconSvgPath1,
            vendorDetailPreviewIppIconSvgPath2,
            vendorDetailPreviewIppIconSvgPath3,
            vendorDetailPreviewIppIconSvgPath4,
            vendorDetailPreviewIppIconSvgPath5,
            vendorDetailPreviewIppIconSvgPath6,
            vendorDetailPreviewIppIconSvgPath7,
          ][i - 1]
        }
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    ))}
  </svg>
);

export const vendorDetailPreviewCustomerUseCasesIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewCustomerUseCasesIconSvgPath1} fill={fillColor} />
    <path d={vendorDetailPreviewCustomerUseCasesIconSvgPath2} fill={fillColor} />
    <path d={vendorDetailPreviewCustomerUseCasesIconSvgPath3} fill={fillColor} />
  </svg>
);

export const vendorDetailPreviewUseCasesIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={Math.round((size * 27) / 32)}
    viewBox="0 0 32 27"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path
        key={i}
        d={
          [
            vendorDetailPreviewUseCasesIconSvgPath1,
            vendorDetailPreviewUseCasesIconSvgPath2,
            vendorDetailPreviewUseCasesIconSvgPath3,
            vendorDetailPreviewUseCasesIconSvgPath4,
            vendorDetailPreviewUseCasesIconSvgPath5,
            vendorDetailPreviewUseCasesIconSvgPath6,
            vendorDetailPreviewUseCasesIconSvgPath7,
          ][i - 1]
        }
        fill={fillColor}
      />
    ))}
  </svg>
);

export const vendorDetailPreviewProductOverviewIcon = ({
  size = 20,
  className = "",
  fillColor = "black",
  ...props
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
    <path d={vendorDetailPreviewProductOverviewIconSvgPath1} fill="#111827" fillRule="evenodd" clipRule="evenodd" />
    <path d={vendorDetailPreviewProductOverviewIconSvgPath2} fill={fillColor} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
