import type { MarketplaceIconName } from "@/data/marketplace";

type IconProps = {
  className?: string;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.875,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" {...stroke} />
      <path d="M15.75 15.7499L12.525 12.5249" {...stroke} />
    </svg>
  );
}

export function RobotIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M9 6V3H6" {...stroke} />
      <path d="M13.5 6H4.5C3.67157 6 3 6.67157 3 7.5V13.5C3 14.3284 3.67157 15 4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V7.5C15 6.67157 14.3284 6 13.5 6Z" {...stroke} />
      <path d="M1.5 10.5H3" {...stroke} />
      <path d="M15 10.5H16.5" {...stroke} />
      <path d="M11.25 9.75V11.25" {...stroke} />
      <path d="M6.75 9.75V11.25" {...stroke} />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M1.54651 8.73903C1.48401 8.90741 1.48401 9.09264 1.54651 9.26103C2.15529 10.7371 3.18865 11.9992 4.51559 12.8874C5.84253 13.7755 7.4033 14.2496 9.00001 14.2496C10.5967 14.2496 12.1575 13.7755 13.4844 12.8874C14.8114 11.9992 15.8447 10.7371 16.4535 9.26103C16.516 9.09264 16.516 8.90741 16.4535 8.73903C15.8447 7.26292 14.8114 6.00081 13.4844 5.1127C12.1575 4.22459 10.5967 3.75049 9.00001 3.75049C7.4033 3.75049 5.84253 4.22459 4.51559 5.1127C3.18865 6.00081 2.15529 7.26292 1.54651 8.73903Z" {...stroke} />
      <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" {...stroke} />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M3.75016 13.75C2.50016 14.8 2.0835 17.9167 2.0835 17.9167C2.0835 17.9167 5.20016 17.5 6.25016 16.25C6.84183 15.55 6.8335 14.475 6.17516 13.825C5.85125 13.5159 5.42457 13.3372 4.97702 13.3234C4.52946 13.3095 4.09256 13.4615 3.75016 13.75Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12.5L7.5 10C7.94345 8.84957 8.50184 7.74676 9.16667 6.70838C10.1377 5.15587 11.4897 3.87758 13.0942 2.99512C14.6986 2.11266 16.5022 1.65535 18.3333 1.66671C18.3333 3.93338 17.6833 7.91671 13.3333 10.8334C12.2807 11.499 11.164 12.0573 10 12.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.50016 9.99993H3.3335C3.3335 9.99993 3.79183 7.47493 5.00016 6.6666C6.35016 5.7666 9.16683 6.6666 9.16683 6.6666" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12.4999V16.6666C10 16.6666 12.525 16.2083 13.3333 14.9999C14.2333 13.6499 13.3333 10.8333 13.3333 10.8333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M3 7.5H5.25L10.5 4.5V13.5L5.25 10.5H3V7.5Z" {...stroke} />
      <path d="M5.25 10.5V13.5C5.25 14.3284 6.17157 15 7.3125 15C8.45343 15 9.375 14.3284 9.375 13.5" {...stroke} />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M3 12.375C3 13.6176 4.00736 14.625 5.25 14.625C5.25 15.6605 6.08947 16.5 7.125 16.5C8.16052 16.5 9 15.6605 9 14.625C9 15.6605 9.83948 16.4999 10.875 16.4999C11.9105 16.4999 12.75 15.6604 12.75 14.6249C13.9927 14.6249 15 13.6175 15 12.3749C15 11.9484 14.8813 11.5496 14.6752 11.2098C15.7145 11.011 16.5 10.0972 16.5 8.99991C16.5 7.90258 15.7145 6.98879 14.6752 6.79C14.8813 6.45015 15 6.05137 15 5.62488C15 4.38223 13.9927 3.37488 12.75 3.37488C12.75 2.33934 11.9105 1.49988 10.875 1.49988C9.83948 1.49988 9 2.33941 9 3.37495C9 2.33941 8.16052 1.49995 7.125 1.49995C6.08947 1.49995 5.25 2.33941 5.25 3.37495C4.00736 3.37495 3 4.38231 3 5.62495C3 6.05144 3.11867 6.45022 3.32478 6.79007C2.28545 6.98886 1.5 7.90266 1.5 8.99998C1.5 10.0972 2.28545 11.011 3.32478 11.2099C3.11867 11.5497 3 11.9485 3 12.375Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.625 10.8749L7.00642 6.73063C7.07723 6.51818 7.27605 6.37488 7.5 6.37488C7.72395 6.37488 7.92278 6.51818 7.99358 6.73063L9.375 10.8749M11.625 6.37488V10.8749M6.375 9.37489H8.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UploadIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M9 11.25V3.75" {...stroke} />
      <path d="M6 6.75L9 3.75L12 6.75" {...stroke} />
      <path d="M3.75 11.25V13.5C3.75 14.3284 4.42157 15 5.25 15H12.75C13.5784 15 14.25 14.3284 14.25 13.5V11.25" {...stroke} />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M11.625 8.25C11.625 6.80025 10.4497 5.625 9 5.625C7.55025 5.625 6.375 6.80025 6.375 8.25C6.375 9.69975 7.55025 10.875 9 10.875C10.4497 10.875 11.625 9.69975 11.625 8.25Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6122 8.51243C11.8537 8.58563 12.1099 8.625 12.3752 8.625C13.825 8.625 15.0002 7.44975 15.0002 6C15.0002 4.55025 13.825 3.375 12.3752 3.375C11.014 3.375 9.89481 4.41105 9.76318 5.7376" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.23703 5.7376C8.1054 4.41105 6.98619 3.375 5.625 3.375C4.17525 3.375 3 4.55025 3 6C3 7.44975 4.17525 8.625 5.625 8.625C5.89036 8.625 6.14651 8.58563 6.38795 8.51243" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 12.375C16.5 10.304 14.6532 8.625 12.375 8.625" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.125 14.625C13.125 12.554 11.2782 10.875 9 10.875C6.72182 10.875 4.875 12.554 4.875 14.625" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.625 8.625C3.34682 8.625 1.5 10.304 1.5 12.375" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TemplatesIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M4.5 3.75H13.5C14.3284 3.75 15 4.42157 15 5.25V14.25C15 15.0784 14.3284 15.75 13.5 15.75H4.5C3.67157 15.75 3 15.0784 3 14.25V5.25C3 4.42157 3.67157 3.75 4.5 3.75Z" {...stroke} />
      <path d="M6.75 7.5H11.25" {...stroke} />
      <path d="M6.75 10.5H11.25" {...stroke} />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M22 6.75H19.2111C18.61 6.75 18.3094 6.75 18.026 6.66418C17.7426 6.57837 17.4925 6.41165 16.9923 6.0782C16.2421 5.57803 15.3862 5.00745 14.961 4.87872C14.5359 4.75 14.085 4.75 13.1833 4.75C11.9571 4.75 11.1667 4.75 10.6154 4.97836C10.0641 5.20672 9.63056 5.64027 8.76347 6.50736L8.00039 7.27044C7.80498 7.46585 7.70727 7.56356 7.64695 7.66002C7.42335 8.01761 7.44813 8.47705 7.70889 8.80851C7.77924 8.89793 7.88689 8.98456 8.10218 9.15782C8.89796 9.79824 10.0452 9.73432 10.7658 9.00942L12 7.76786H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 16.3185L14.5 17.3244C15.0523 17.88 15.9477 17.88 16.5 17.3244C17.0523 16.7689 17.0523 15.8681 16.5 15.3125L13.5 12.2947M11.5 14.3185L13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M2 14.75H2.31894C3.14808 14.75 3.56266 14.75 3.93435 14.9062C4.30604 15.0625 4.59615 15.3586 5.17637 15.9509L8 18.8334C8.55229 19.3889 9.44772 19.3889 10 18.8334C10.5523 18.2778 10.5523 17.377 10 16.8214L9.5 16.3185" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14.75H19.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.5 6.75H2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function PackageIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M9 9.75L15.75 6.375V12.75L9 16.125L2.25 12.75V6.375L9 9.75Z" {...stroke} />
      <path d="M9 9.75V16.125" {...stroke} />
      <path d="M15.75 6.375L9 3L2.25 6.375" {...stroke} />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M3.75 3.75H7.5V7.5H3.75V3.75Z" {...stroke} />
      <path d="M10.5 3.75H14.25V7.5H10.5V3.75Z" {...stroke} />
      <path d="M3.75 10.5H7.5V14.25H3.75V10.5Z" {...stroke} />
      <path d="M10.5 10.5H14.25V14.25H10.5V10.5Z" {...stroke} />
    </svg>
  );
}

export function PercentIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M15.707 12.6265C15.2148 9.66495 13.6824 7.4596 12.3502 6.16425C11.9626 5.78731 11.7688 5.59885 11.3406 5.42443C10.9124 5.25 10.5444 5.25 9.80835 5.25H8.19165C7.45561 5.25 7.08757 5.25 6.65941 5.42443C6.23125 5.59885 6.03743 5.78731 5.64978 6.16425C4.31761 7.4596 2.78521 9.66495 2.29295 12.6265C1.9267 14.83 3.95945 16.5 6.23124 16.5H11.7688C14.0405 16.5 16.0733 14.83 15.707 12.6265Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.44246 3.33215C5.28773 3.10694 5.06346 2.80124 5.52674 2.73154C6.00294 2.65988 6.49741 2.98585 6.98141 2.97916C7.41928 2.9731 7.64235 2.77889 7.88167 2.50161C8.13367 2.20963 8.5239 1.5 9 1.5C9.4761 1.5 9.86633 2.20963 10.1183 2.50161C10.3577 2.77889 10.5807 2.9731 11.0185 2.97916C11.5026 2.98585 11.9971 2.65988 12.4733 2.73154C12.9365 2.80124 12.7123 3.10694 12.5576 3.33215L11.8579 4.35048C11.5586 4.7861 11.409 5.0039 11.0958 5.12695C10.7827 5.25 10.378 5.25 9.56865 5.25H8.43135C7.62203 5.25 7.21732 5.25 6.90417 5.12695C6.59101 5.0039 6.44138 4.7861 6.14209 4.35048L5.44246 3.33215Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M10.22 9.68893C10.0579 9.09036 9.23258 8.55021 8.2419 8.95431C7.25122 9.35833 7.09385 10.6585 8.59238 10.7966C9.26963 10.859 9.71123 10.7242 10.1155 11.1057C10.5198 11.4871 10.5949 12.5481 9.56138 12.834C8.52788 13.1199 7.5045 12.6732 7.39307 12.0388M8.88128 8.24451V8.81481M8.88128 12.922V13.4945" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LaunchFastIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M8.85097 4.86712L9.96517 3.75294C11.2197 2.4984 12.8621 1.97803 14.6003 1.893C15.2764 1.85992 15.6145 1.84338 15.8855 2.11446C16.1566 2.38554 16.1401 2.72358 16.107 3.39967C16.0219 5.13788 15.5016 6.78032 14.2471 8.03483L13.1329 9.14903C12.2153 10.0666 11.9545 10.3275 12.1471 11.3228C12.3372 12.083 12.5212 12.8192 11.9683 13.3721C11.2978 14.0426 10.6861 14.0426 10.0155 13.3721L4.62793 7.9845C3.95737 7.31391 3.95734 6.70223 4.62793 6.03165C5.18075 5.47882 5.91697 5.66283 6.67723 5.85292C7.6725 6.04555 7.93342 5.78467 8.85097 4.86712Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M1.875 16.125L5.625 12.375" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6.375 16.125L7.875 14.625" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M1.875 11.625L3.375 10.125" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.8438 5.25H12.75M12.9375 5.25C12.9375 5.35355 12.8536 5.4375 12.75 5.4375C12.6464 5.4375 12.5625 5.35355 12.5625 5.25C12.5625 5.14645 12.6464 5.0625 12.75 5.0625C12.8536 5.0625 12.9375 5.14645 12.9375 5.25Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M15 9.74997C15 13.5 12.375 15.375 9.255 16.4625C9.09162 16.5178 8.91415 16.5152 8.7525 16.455C5.625 15.375 3 13.5 3 9.74997V4.49997C3 4.30106 3.07902 4.11029 3.21967 3.96964C3.36032 3.82899 3.55109 3.74997 3.75 3.74997C5.25 3.74997 7.125 2.84997 8.43 1.70997C8.58889 1.57422 8.79102 1.49963 9 1.49963C9.20898 1.49963 9.41111 1.57422 9.57 1.70997C10.8825 2.85747 12.75 3.74997 14.25 3.74997C14.4489 3.74997 14.6397 3.82899 14.7803 3.96964C14.921 4.11029 15 4.30106 15 4.49997V9.74997Z" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VideoIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M3 5.25C3 4.42157 3.67157 3.75 4.5 3.75H10.5C11.3284 3.75 12 4.42157 12 5.25V12.75C12 13.5784 11.3284 14.25 10.5 14.25H4.5C3.67157 14.25 3 13.5784 3 12.75V5.25Z" {...stroke} />
      <path d="M12 7.5L15.75 5.25V12.75L12 10.5" {...stroke} />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M3 4.5C3 3.67157 3.67157 3 4.5 3H13.5C14.3284 3 15 3.67157 15 4.5V10.5C15 11.3284 14.3284 12 13.5 12H4.5C3.67157 12 3 11.3284 3 10.5V4.5Z" {...stroke} />
      <path d="M7.5 15H10.5" {...stroke} />
      <path d="M9 12V15" {...stroke} />
    </svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path d="M4.5 10.5V9C4.5 6.10051 6.85051 3.75 9.75 3.75C12.6495 3.75 15 6.10051 15 9V10.5" {...stroke} />
      <path d="M4.5 10.5C3.67157 10.5 3 11.1716 3 12V12.75C3 13.5784 3.67157 14.25 4.5 14.25H5.25V10.5H4.5Z" {...stroke} />
      <path d="M14.25 10.5H13.5V14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V12C15.75 11.1716 15.0784 10.5 14.25 10.5Z" {...stroke} />
    </svg>
  );
}

const ICON_COMPONENTS: Record<
  MarketplaceIconName,
  React.ComponentType<IconProps>
> = {
  search: SearchIcon,
  robot: RobotIcon,
  eye: EyeIcon,
  rocket: RocketIcon,
  megaphone: MegaphoneIcon,
  ai: AiIcon,
  upload: UploadIcon,
  users: UsersIcon,
  templates: TemplatesIcon,
  handshake: HandshakeIcon,
  package: PackageIcon,
  grid: GridIcon,
  percent: PercentIcon,
  launchFast: LaunchFastIcon,
  shield: ShieldIcon,
  video: VideoIcon,
  monitor: MonitorIcon,
  headset: HeadsetIcon,
};

export function MarketplaceIcon({
  name,
  className,
}: {
  name: MarketplaceIconName;
  className?: string;
}) {
  const Icon = ICON_COMPONENTS[name];
  return <Icon className={className} />;
}
