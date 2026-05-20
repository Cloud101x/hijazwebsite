import type { SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

export interface Partner {
  name: string;
  Logo: (props: LogoProps) => JSX.Element;
}

const Wordmark = ({
  mark,
  label,
  letterSpacing = '-0.02em',
  weight = 600,
}: {
  mark: JSX.Element;
  label: string;
  letterSpacing?: string;
  weight?: number;
}) => (
  <>
    {mark}
    <text
      x="28"
      y="17"
      fontFamily="Inter, sans-serif"
      fontWeight={weight}
      fontSize="15"
      letterSpacing={letterSpacing}
      fill="currentColor"
    >
      {label}
    </text>
  </>
);

const Flutterwave = (props: LogoProps) => (
  <svg viewBox="0 0 150 24" fill="currentColor" {...props}>
    <path d="M3 5l9 14h4L7 5H3zm14 0l-7 14h4l3-6 3 6h4l-7-14h-1zm10 0v14h4V5h-4z" />
    <text x="46" y="17" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="15" letterSpacing="-0.02em" fill="currentColor">Flutterwave</text>
  </svg>
);

const Paystack = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <rect x="3" y="4" width="18" height="3" rx="1.5" />
          <rect x="3" y="9" width="14" height="3" rx="1.5" />
          <rect x="3" y="14" width="18" height="3" rx="1.5" />
          <rect x="3" y="19" width="10" height="3" rx="1.5" />
        </>
      }
      label="Paystack"
    />
  </svg>
);

const Andela = (props: LogoProps) => (
  <svg viewBox="0 0 100 24" fill="currentColor" {...props}>
    <Wordmark
      mark={<path d="M3 20L11 3l8 17h-3.6l-1.5-3.6h-5.8L6.6 20H3zm6.4-7h3.2L11 8.6 9.4 13z" />}
      label="Andela"
      weight={700}
    />
  </svg>
);

const Kuda = (props: LogoProps) => (
  <svg viewBox="0 0 90 24" fill="currentColor" {...props}>
    <Wordmark
      mark={<path d="M4 4v16h3v-6l1.5-1.5L13 20h4l-6.5-9L17 4h-4l-6 7V4H4z" />}
      label="Kuda"
      weight={700}
    />
  </svg>
);

const Cowrywise = (props: LogoProps) => (
  <svg viewBox="0 0 130 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M12 6v12M6 9.5h12M6 14.5h12" stroke="currentColor" strokeWidth="1.2" />
        </>
      }
      label="Cowrywise"
    />
  </svg>
);

const Piggyvest = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <path d="M4 13c0-3.3 2.7-6 6-6h6c3 0 5 2 5 5 0 2-1 3.5-2.5 4.5L19 19h-2l-1-1.5c-.6.3-1.3.5-2 .5h-1l-1 1.5H10l.5-2C7.5 16.5 4 15.5 4 13z" />
          <circle cx="9" cy="11" r="0.8" fill="#0B0B0B" />
        </>
      }
      label="Piggyvest"
    />
  </svg>
);

const MTN = (props: LogoProps) => (
  <svg viewBox="0 0 80 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <ellipse cx="12" cy="12" rx="9" ry="6.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </>
      }
      label="MTN"
      weight={800}
      letterSpacing="0.04em"
    />
  </svg>
);

const Interswitch = (props: LogoProps) => (
  <svg viewBox="0 0 130 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <path d="M3 8h18l-3-3M21 16H3l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      }
      label="Interswitch"
    />
  </svg>
);

const Moniepoint = (props: LogoProps) => (
  <svg viewBox="0 0 130 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M7 16V9l3 4 2-3 2 3 3-4v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      }
      label="Moniepoint"
    />
  </svg>
);

const Carbon = (props: LogoProps) => (
  <svg viewBox="0 0 100 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <path d="M19 8a8 8 0 1 0 0 8h-3a5 5 0 1 1 0-8h3z" />
      }
      label="Carbon"
    />
  </svg>
);

const Chipper = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M7 10h2M7 14h2M11 10h2M11 14h2M15 10h2M15 14h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </>
      }
      label="Chipper"
    />
  </svg>
);

const Jumia = (props: LogoProps) => (
  <svg viewBox="0 0 100 24" fill="currentColor" {...props}>
    <Wordmark
      mark={<path d="M11 4v12.5c0 1-.5 1.5-1.5 1.5S8 17.5 8 16.5V14H5v2.5C5 19 7 21 9.5 21S14 19 14 16.5V4h-3z" />}
      label="Jumia"
      weight={700}
    />
  </svg>
);

const Risevest = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={<path d="M4 18l5-7 4 3 7-9v3l-7 9-4-3-3 5H4z" />}
      label="Risevest"
    />
  </svg>
);

const MPesa = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M7 16V8l3 4 2-3 2 3 3-4v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      }
      label="M-Pesa"
      weight={700}
    />
  </svg>
);

const Bamboo = (props: LogoProps) => (
  <svg viewBox="0 0 110 24" fill="currentColor" {...props}>
    <Wordmark
      mark={
        <>
          <rect x="6" y="3" width="3" height="6" rx="1" />
          <rect x="6" y="10" width="3" height="5" rx="1" />
          <rect x="6" y="16" width="3" height="5" rx="1" />
          <rect x="14" y="6" width="3" height="6" rx="1" />
          <rect x="14" y="13" width="3" height="6" rx="1" />
        </>
      }
      label="Bamboo"
    />
  </svg>
);

export const partners: Partner[] = [
  { name: 'Flutterwave', Logo: Flutterwave },
  { name: 'Paystack', Logo: Paystack },
  { name: 'Andela', Logo: Andela },
  { name: 'Kuda', Logo: Kuda },
  { name: 'Moniepoint', Logo: Moniepoint },
  { name: 'Interswitch', Logo: Interswitch },
  { name: 'MTN', Logo: MTN },
  { name: 'Cowrywise', Logo: Cowrywise },
  { name: 'Piggyvest', Logo: Piggyvest },
  { name: 'Carbon', Logo: Carbon },
  { name: 'Chipper Cash', Logo: Chipper },
  { name: 'Jumia', Logo: Jumia },
  { name: 'M-Pesa', Logo: MPesa },
  { name: 'Risevest', Logo: Risevest },
  { name: 'Bamboo', Logo: Bamboo },
];

export const heroPartners: Partner[] = [
  { name: 'Flutterwave', Logo: Flutterwave },
  { name: 'Paystack', Logo: Paystack },
  { name: 'Kuda', Logo: Kuda },
  { name: 'Andela', Logo: Andela },
  { name: 'MTN', Logo: MTN },
  { name: 'Moniepoint', Logo: Moniepoint },
];
