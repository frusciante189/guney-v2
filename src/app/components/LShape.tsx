interface LShapeProps {
  color?: string;
}

export default function LShape({ color = "#ff5247" }: LShapeProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M1 0C0.447715 0 0 0.447715 0 1V11C0 11.5523 0.447715 12 1 12H11C11.5523 12 12 11.5523 12 11V11C12 10.4477 11.5523 10 11 10H3C2.44772 10 2 9.55228 2 9V1C2 0.447715 1.55228 0 1 0V0Z"
        fill={color}
      />
    </svg>
  );
}
