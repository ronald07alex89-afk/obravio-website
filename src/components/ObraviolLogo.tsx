export function ObraviolIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#dc2626" />
      <path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 33C19.029 33 15 28.971 15 24C15 19.029 19.029 15 24 15C28.971 15 33 19.029 33 24C33 28.971 28.971 33 24 33Z" fill="white" fillOpacity="0.95" />
      <rect x="22" y="6" width="4" height="10" rx="2" fill="white" fillOpacity="0.9" />
      <rect x="22" y="32" width="4" height="10" rx="2" fill="white" fillOpacity="0.9" />
      <rect x="32" y="22" width="10" height="4" rx="2" fill="white" fillOpacity="0.9" />
      <rect x="6" y="22" width="10" height="4" rx="2" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

export function ObraviolLogo({ iconSize = 40 }: { iconSize?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <ObraviolIcon size={iconSize} />
      <span className="text-white font-[800] text-2xl tracking-[-0.5px]">
        Obravio
      </span>
    </div>
  );
}
