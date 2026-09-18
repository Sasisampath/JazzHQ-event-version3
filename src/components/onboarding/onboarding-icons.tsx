type IconProps = {
  className?: string;
};

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M9 9C10.6569 9 12 7.65685 12 6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 15.75C3 13.1266 5.68629 11.25 9 11.25C12.3137 11.25 15 13.1266 15 15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 5.25L9 9.75L15 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="4.5"
        width="12"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 15.75V6.75L9 3.75L15 6.75V15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6.75 15.75V11.25H11.25V15.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.75 8.25H6.7575M9 8.25H9.0075M11.25 8.25H11.2575" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M7.5 10.5L10.5 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.25 12.75L6.375 14.625C5.33947 15.6605 3.66053 15.6605 2.625 14.625C1.58947 13.5895 1.58947 11.9105 2.625 10.875L4.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.75 5.25L11.625 3.375C12.6605 2.33947 14.3395 2.33947 15.375 3.375C16.4105 4.41053 16.4105 6.08947 15.375 7.125L13.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="9" cy="9" r="6.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.25 9H15.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 2.25C7.25 4.5 6.375 6.675 6.375 9C6.375 11.325 7.25 13.5 9 15.75C10.75 13.5 11.625 11.325 11.625 9C11.625 6.675 10.75 4.5 9 2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5.25 2.25H10.5L14.25 6V14.25C14.25 15.0784 13.5784 15.75 12.75 15.75H5.25C4.42157 15.75 3.75 15.0784 3.75 14.25V3.75C3.75 2.92157 4.42157 2.25 5.25 2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10.5 2.25V6H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.75 9.75H11.25M6.75 12H9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8 1.5L2.5 3.75V7.5C2.5 10.75 5 13.375 8 14.5C11 13.375 13.5 10.75 13.5 7.5V3.75L8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M6 8L7.25 9.25L10 6.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
