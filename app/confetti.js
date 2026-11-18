"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Fora do bundle inicial: o confete só roda depois da hidratação.
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confetti() {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  if (!size) return null;

  return (
    <ReactConfetti
      {...size}
      recycle={false}
      onConfettiComplete={() => setSize(null)}
    />
  );
}
