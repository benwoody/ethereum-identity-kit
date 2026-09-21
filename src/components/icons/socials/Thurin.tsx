const Thurin: React.FC<React.SVGProps<SVGSVGElement>> = ({ height = 32, width = 32, ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#1A1A12" />
      <path d="M8 25 Q8 8 16 8 Q24 8 24 16" stroke="#7C9A3E" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M11.5 23 Q11.5 12.5 16 12.5 Q20.5 12.5 20.5 17"
        stroke="#7C9A3E"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M15.2 20.5 Q15.2 17 16 17 Q16.8 17 16.8 17.8" stroke="#C9A227" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="22" cy="22" r="3.4" stroke="#C9A227" strokeWidth="1.8" />
      <path d="M24.6 24.6 L27 27" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default Thurin
