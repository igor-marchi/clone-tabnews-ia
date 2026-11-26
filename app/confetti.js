"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Fora do bundle inicial: o confete só roda depois da hidratação.
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confetti() {
  const [finished, setFinished] = useState(false);

  if (finished) return null;

  // Sem width/height, o react-confetti usa o tamanho da janela.
  return (
    <ReactConfetti
      recycle={false}
      onConfettiComplete={() => setFinished(true)}
    />
  );
}
